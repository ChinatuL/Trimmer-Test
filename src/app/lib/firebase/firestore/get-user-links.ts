import { getFirestore } from "firebase-admin/firestore";

export function getLinkDocument(id: string) {
    const firestore = getFirestore();
    return firestore.collection("links").doc(id);
}

export function getLinksCollection() {
    const firestore = getFirestore();
    return firestore.collection("links");
}

