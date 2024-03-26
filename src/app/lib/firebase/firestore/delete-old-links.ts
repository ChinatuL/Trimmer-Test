import { getFirestore } from "firebase-admin/firestore";
import { NextResponse } from "next/server";
export async function deleteOldLinks() {
    const firebase = getFirestore();
    const linksCollection = firebase.collection("links");
    const thirtyDaysAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);
    const query = linksCollection.where(
        "timestamp",
        "<",
        new Date(thirtyDaysAgo).toISOString()
    );
    try {
        const links = await query.get();
        const deletePromise = links.docs.map(async (doc) => {
            await doc.ref.delete();
        });
        await Promise.all(deletePromise);
        if (links.size > 0) {
            return NextResponse.json(
                { message: "Links deleted" },
                { status: 200 }
            );
        }
        return NextResponse.json(
            { message: "No links to delete" },
            { status: 200 }
        );
    } catch (error) {
        console.error(error);
    }
}
