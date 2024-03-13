import { firestore } from "../firebase-admin-config";

export function getLinkDocument(uid: string, id: string) {
    return firestore.collection("users").doc(uid).collection("links").doc(id);
}
