import { customInitApp } from "@/app/lib/firebase/firebase-admin-config";
import { NextResponse, NextRequest } from "next/server";
import { getUserUidAndEmail } from "@/app/lib/firebase/auth/current-user-action";
import { getLinkDocument } from "@/app/lib/firebase/firestore/get-user-links";

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
