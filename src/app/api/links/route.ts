import { customInitApp } from "@/app/lib/firebase/firebase-admin-config";
import { NextResponse, NextRequest } from "next/server";
import { getFirestore } from "firebase-admin/firestore";

customInitApp();
export async function GET(request: NextRequest) {
    try {
        const firebase = getFirestore();
        const collection = firebase.collection("links");
        const links = await collection.get();
        const linksData = links.docs.map((doc) => doc.data());
          return NextResponse.json({ links: linksData }, { status: 200 });
    } catch (error) {
      console.error(error);
      return NextResponse.json(
          { error: "Internal Server Error" },
          { status: 500 }
      );
    }
}
