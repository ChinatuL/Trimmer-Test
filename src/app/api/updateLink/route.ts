import { NextResponse, NextRequest } from "next/server";
import { customInitApp } from "@firebase/firebase-admin-config";
import {
    getLinkDocument,
    getLinksCollection,
} from "@firebase/firestore/get-user-links";

customInitApp();

export async function POST(request: NextRequest) {
    try {
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

        const linksCollection = getLinksCollection();
        const existingLink = await linksCollection
            .where("shortLink", "==", customName)
            .get();
        if (!existingLink.empty) {
            return NextResponse.json(
                { error: "Custom name already taken" },
                { status: 400 }
            );
        }

        const docRef = getLinkDocument(id);
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
