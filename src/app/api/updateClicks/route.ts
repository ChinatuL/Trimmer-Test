import { customInitApp } from "@/app/lib/firebase/firebase-admin-config";
import { NextResponse, NextRequest } from "next/server";
import { getUserUidAndEmail } from "@/app/lib/firebase/auth/current-user-action";
import { getLinkDocument } from "@/app/lib/firebase/firestore/get-user-links";

// update the click array with the location of the click
customInitApp();

export async function POST(request: NextRequest) {
    try {
        const result = await getUserUidAndEmail(request);
        const { uid } = await result.json();
        const { id, location } = await request.json();
        const viewObj = { location, date: new Date().toISOString() };
        if (!id) {
            return NextResponse.json(
                { error: "Select a link to update" },
                { status: 400 }
            );
        }
        const docRef = getLinkDocument(uid, id);
        const doc = await docRef.get();
        if (!doc.exists) {
            return NextResponse.json(
                { error: "Link does not exist" },
                { status: 400 }
            );
        }
      // add to the views array
        await docRef.update({
            views: [...doc.data()?.views, viewObj],
        });
        return NextResponse.json({ message: "View added" }, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}
