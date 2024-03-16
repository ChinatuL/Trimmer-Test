import { customInitApp } from "@/app/lib/firebase/firebase-admin-config";
import { NextResponse, NextRequest } from "next/server";
import { getUserUidAndEmail } from "@/app/lib/firebase/auth/current-user-action";
import {
    getLinkDocument,
    getLinksCollection,
} from "@/app/lib/firebase/firestore/get-user-links";
import { getFirestore } from "firebase-admin/firestore";

// delete specific link by id from firestore
customInitApp();

export async function POST(request: NextRequest) {
    try {
        const result = await getUserUidAndEmail(request);
        const { uid } = await result.json();
        const { id, customName } = await request.json();
        if (!id) {
            return NextResponse.json(
                { error: "Select a link to update" },
                { status: 400 }
            );
        }
        if (!customName) {
            return NextResponse.json(
                { error: "Please enter a name for your link" },
                { status: 400 }
            );
        }
        // check if customName is already taken
        const linksCollection = getLinksCollection(uid);
        const existingLink = await linksCollection
            .where("shortLink", "==", customName)
            .get();
        if (!existingLink.empty) {
            return NextResponse.json(
                { error: "Custom name already taken" },
                { status: 400 }
            );
        }

        const docRef = getLinkDocument(uid, id);
        await docRef.update({ shortLink: customName });
        return NextResponse.json({ message: "Link updated" }, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}
