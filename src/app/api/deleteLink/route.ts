import { NextResponse, NextRequest } from "next/server";
import { customInitApp } from "@firebase/firebase-admin-config";
import { getUserUidAndEmail } from "@firebase/auth/current-user-action";
import { getLinkDocument } from "@firebase/firestore/get-user-links";

customInitApp();

export async function DELETE(request: NextRequest) {
    try {
        const result = await getUserUidAndEmail(request);
        const { uid } = await result.json();
        const { id } = await request.json();
        if (!id) {
            return NextResponse.json(
                { error: "Select a link to delete" },
                { status: 400 }
            );
        }
        const docRef = getLinkDocument(uid, id);
        await docRef.delete();
        return NextResponse.json({ message: "Link deleted" }, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}
