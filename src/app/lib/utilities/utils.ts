import { db } from "../firebase/firebase-config";

import {
    collection,
    getDocs,
    onSnapshot,
    query,
    where,
} from "firebase/firestore";
import { nanoid } from "nanoid";
export const baseUrl =
    process.env.NEXT_PUBLIC_VERCEL_URL || "http://localhost:3000";

export function makeUrlShort(length: number) {
    let result = "";
    const characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_";
    const charactersLength = characters.length;

    for (let i = 0; i < length; i++) {
        result += characters.charAt(
            Math.floor(Math.random() * charactersLength)
        );
    }
    return result;
}

export function copyLinkToClipboard(url:string) {
  if (typeof window !== undefined) {
    navigator.clipboard.writeText(url);
  }
}


