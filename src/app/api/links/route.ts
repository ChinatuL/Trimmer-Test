import { NextResponse, NextRequest } from "next/server";
import { customInitApp } from "@firebase/firebase-admin-config";
import { getFirestore } from "firebase-admin/firestore";
import { deleteOldLinks } from "@firebase/firestore/links";

customInitApp();
export async function GET(request: NextRequest) {
    const shortenedLink = new URL(request.url);
    try {
        const res = await deleteOldLinks();
        if (res?.status === 200) {
            const firebase = getFirestore();
            const linksCollection = firebase.collection("links");
            const orderQuery = linksCollection.orderBy("timestamp", "desc");
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
        }
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}
