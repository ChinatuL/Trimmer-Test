import { customInitApp } from "@lib/firebase/firebase-admin-config";
import { NextResponse, NextRequest } from "next/server";
import { getFirestore } from "firebase-admin/firestore";
import { deleteOldLinks } from "@lib/firebase/firestore/links";

customInitApp();
export async function GET(request: NextRequest) {
    const shortenedLink = new URL(request.url);
    try {
        const res = await deleteOldLinks();
        if (res?.status === 200) {
            const firebase = getFirestore();
            const linksCollection = firebase.collection("links");
            const orderQuery = linksCollection.orderBy("timestamp", "desc");
            const limitQuery = orderQuery.limit(5);
            const lastFiveLinks = await limitQuery.get();
            const lastFiveLinksData = lastFiveLinks.docs.map((doc) =>
                doc.data()
            );
            return NextResponse.json(
                { links: lastFiveLinksData },
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
