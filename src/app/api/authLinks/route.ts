import { customInitApp } from "@/app/lib/firebase/firebase-admin-config";
import { NextResponse, NextRequest } from "next/server";
import { getFirestore } from "firebase-admin/firestore";
import { auth } from "firebase-admin";

customInitApp();

// get the link object from the shorten link form and save to firebase with a timestamp and the signed in users uid
export async function POST(request: NextRequest) {
  const session = request.cookies.get("session");
  

}
