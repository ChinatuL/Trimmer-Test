import { NextResponse, NextRequest } from "next/server";
import { customInitApp } from "@firebase/firebase-admin-config";
import { getLinkDocument } from "@firebase/firestore/get-user-links";

customInitApp();

export async function POST(request: NextRequest) {
    try {
        const { id, location } = await request.json();
        const viewObj = { location, date: new Date().toISOString() };
        if (!id) {
            return NextResponse.json(
                { error: "Select a link to update" },
                { status: 400 }
            );
        }
        const docRef = getLinkDocument(id);
        const doc = await docRef.get();
        if (!doc.exists) {
            return NextResponse.json(
                { error: "Link does not exist" },
                { status: 400 }
            );
        }
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
