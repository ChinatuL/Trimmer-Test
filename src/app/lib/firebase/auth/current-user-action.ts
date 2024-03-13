import { NextRequest, NextResponse } from "next/server";
import { auth } from "firebase-admin";
import { customInitApp } from "@/app/lib/firebase/firebase-admin-config";

customInitApp();
export async function getUserUidAndEmail(request: NextRequest) {
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
        return NextResponse.json({ uid, email }, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { error: "User not authenticated" },
            { status: 401 }
        );
    }
}
