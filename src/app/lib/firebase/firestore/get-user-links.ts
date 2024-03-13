import { getFirestore } from "firebase-admin/firestore";

export function getLinkDocument(uid: string, id: string) {
    const firestore = getFirestore();
    return firestore.collection("users").doc(uid).collection("links").doc(id);
}

export function getLinksCollection(uid: string) {
    const firestore = getFirestore();
    return firestore.collection("users").doc(uid).collection("links");
}