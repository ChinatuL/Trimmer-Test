import { customInitApp } from "@/app/lib/firebase/firebase-admin-config";
import { NextResponse, NextRequest } from "next/server";
import { getFirestore } from "firebase-admin/firestore";
import { auth } from "firebase-admin";

// delete specific link by id from firestore
customInitApp();

export async function POST(request: NextRequest) {
    const session = request.cookies.get("session");
    if (!session) {
        return NextResponse.json(
            { error: "User not authenticated" },
            { status: 401 }
        );
    }
    try {
        const decodedClaims = await auth().verifySessionCookie(
            session.value,
            true
        );
        const uid = decodedClaims.uid;
        const { id, customName } = await request.json();
        if (!id) {
            return NextResponse.json(
                { error: "Select a link to update" },
                { status: 400 }
            );
        }
        const firestore = getFirestore();
        const docRef = firestore
            .collection("users")
            .doc(uid)
            .collection("links")
            .doc(id);
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
