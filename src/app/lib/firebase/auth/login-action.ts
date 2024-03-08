import { auth } from "firebase-admin";
import { cookies, headers } from "next/headers";
import { NextResponse } from "next/server";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth as authConfig } from "../firebase-config";

export async function handleBearerToken(authorization: string | null) {
    if (authorization?.startsWith("Bearer ")) {
        const idToken = authorization.split("Bearer ")[1];
        const decodedToken = await auth().verifyIdToken(idToken);

        if (decodedToken) {
            // set expiration to 1 day
            const expiresIn = 24 * 60 * 60 * 1000;
            const sessionCookie = await auth().createSessionCookie(idToken, {
                expiresIn,
            });
            const options = {
                name: "session",
                value: sessionCookie,
                maxAge: expiresIn,
                httpOnly: true,
                secure: true,
            };
            cookies().set(options);
            return NextResponse.json({}, { status: 200 });
        }
    }
}

export async function loginUser(email: string, password: string) {
    try {
        const userCredential = await signInWithEmailAndPassword(
            authConfig,
            email,
            password
        );
        const user = userCredential.user;
        const authorization = await user.getIdToken();
        if (authorization) {
            const idToken = authorization;
            const decodedToken = await auth().verifyIdToken(idToken);

            if (decodedToken) {
                const expiresIn = 24 * 60 * 60 * 1000;
                const sessionCookie = await auth().createSessionCookie(
                    idToken,
                    {
                        expiresIn,
                    }
                );
                const options = {
                    name: "session",
                    value: sessionCookie,
                    maxAge: expiresIn,
                    httpOnly: true,
                    secure: true,
                };
                cookies().set(options);
                return NextResponse.json({ options }, { status: 200 });
            }
        }
    } catch (error) {
        console.error("Authentication error: ", error);

        let errorMessage = "Authentication failed";
        if (error.code === "auth/wrong-password") {
            errorMessage = "Password Incorrect";
        } else if (error.code === "auth/user-not-found") {
            errorMessage = "User not found";
        } else if (error.code === "auth/invalid-email") {
            errorMessage = "Invalid email address";
        }

        return NextResponse.json({ error: errorMessage }, { status: 401 });
    }
}
