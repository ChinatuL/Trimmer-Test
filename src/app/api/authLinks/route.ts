import { customInitApp } from "@/app/lib/firebase/firebase-admin-config";
import { NextResponse, NextRequest } from "next/server";
import { getFirestore } from "firebase-admin/firestore";
import { deleteOldLinks } from "@/app/lib/firebase/firestore/links";
import { auth } from "firebase-admin";

customInitApp();
// fetch the signed in users links from firestore with the users uid
export async function GET(request: NextRequest) {
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
        const firestore = getFirestore();
        const usersCollection = firestore
            .collection("users")
            .doc(uid)
            .collection("links");
        const links = await usersCollection.get();
        const linksData = links.docs.map((doc) => doc.data());
        return NextResponse.json(
            { links: linksData },
            {
                status: 200,
                headers: {
                    "Cache-Control": "must-revalidate, max-age=0",
                },
            }
        );
    } catch (error) {
      console.error(error);
      return NextResponse.json(
          { error: "Internal Server Error" },
          { status: 500 }
      );
    }
}
