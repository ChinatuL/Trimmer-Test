import { customInitApp } from "@/app/lib/firebase/firebase-admin-config";
import { NextResponse, NextRequest } from "next/server";
import { getFirestore } from "firebase-admin/firestore";
import { auth } from "firebase-admin";

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
        const email = decodedClaims.email;
        const { linkObj } = await request?.json();
        if (!linkObj) {
            return NextResponse.json(
                { error: "Link not found" },
                { status: 400 }
            );
        }
        const firestore = getFirestore();
        const userRef = firestore.collection("users").doc(uid);
        await userRef.set({ email }, { merge: true });
        const linksRef = userRef.collection("links");
        await linksRef.add(linkObj);
        return NextResponse.json({ message: "Link added" }, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}
