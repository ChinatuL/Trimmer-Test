import { NextResponse, NextRequest } from "next/server";
import { customInitApp } from "@firebase/firebase-admin-config";
import { getFirestore } from "firebase-admin/firestore";
import { getUserUidAndEmail } from "@firebase/auth/current-user-action";

customInitApp();

export async function GET(request: NextRequest) {
    try {
        const result = await getUserUidAndEmail(request);
        const { uid } = await result.json();
        const firestore = getFirestore();
        const usersCollection = firestore
            .collection("users")
            .doc(uid)
            .collection("links");
        const orderQuery = usersCollection.orderBy("timestamp", "desc");
        const links = await orderQuery.get();
        const linksData = links.docs.map((doc) => {
            return { ...doc.data(), id: doc.id };
        });
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
