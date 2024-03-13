import { customInitApp } from "@/app/lib/firebase/firebase-admin-config";
import { NextResponse, NextRequest } from "next/server";
import { firestore } from "../../lib/firebase/firebase-admin-config";
import { getUserUidAndEmail } from "@/app/lib/firebase/auth/current-user-action";

customInitApp();

export async function POST(request: NextRequest) {
    try {
        const result = await getUserUidAndEmail(request);
        const { uid, email } = await result.json();
        const { linkObj } = await request?.json();
        if (!linkObj) {
            return NextResponse.json(
                { error: "Link not found" },
                { status: 400 }
            );
        }
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
