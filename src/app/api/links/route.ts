import { customInitApp } from "@/app/lib/firebase/firebase-admin-config";
import { NextResponse, NextRequest } from "next/server";
import { getFirestore } from "firebase-admin/firestore";

customInitApp();
export async function GET(request: NextRequest) {
    try {
        const firebase = getFirestore();
        const linksCollection = firebase.collection("links");
        // order by createdAt in descending order
        const orderQuery = linksCollection.orderBy("timestamp", "desc");
        // limit it to 5
        const limitQuery = orderQuery.limit(5);
        // fetch the data
        const lastFiveLinks = await limitQuery.get();
      //   const collection = firebase.collection("links");
      //   const links = await collection.get();
      // const linksData = links.docs.map((doc) => doc.data());
      const lastFiveLinksData = lastFiveLinks.docs.map((doc) => doc.data());
        return NextResponse.json({ links: lastFiveLinksData }, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}
