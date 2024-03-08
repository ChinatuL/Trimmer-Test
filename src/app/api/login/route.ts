import { auth } from "firebase-admin";
import { cookies, headers } from "next/headers";
import { NextResponse, NextRequest } from "next/server";
import { customInitApp } from "../../lib/firebase/firebase-admin-config";
import { handleBearerToken, loginUser } from "@/app/lib/firebase/auth/login-action";

customInitApp();

export async function POST(request: NextRequest, response: NextResponse) {
    try {
        const { email, password } = await request?.json();

        if (!email || !password) {
            const authorization = headers().get("Authorization");
            const result = await handleBearerToken(authorization);
            return (
                result ||
                NextResponse.json(
                    { error: "Email and password are required." },
                    { status: 400 }
                )
            );
        } else {
            const result = await loginUser(email, password);
            return (
                result ||
                NextResponse.json(
                    { error: "Internal Server Error" },
                    { status: 500 }
                )
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

export async function GET(request: NextRequest) {
    const session = cookies().get("session")?.value || "";
    if (!session) {
        return NextResponse.json({ isLogged: false }, { status: 401 });
    }
    const decodedClaims = await auth().verifySessionCookie(session, true);

    if (!decodedClaims) {
        return NextResponse.json({ isLogged: false }, { status: 401 });
    }
    return NextResponse.json({ isLogged: true }, { status: 200 });
}
