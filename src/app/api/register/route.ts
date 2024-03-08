import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../lib/firebase/firebase-config";
import { NextResponse } from "next/server";

export async function registerUser(email: string, password: string) {
    try {
        const userCredential = await createUserWithEmailAndPassword(
            auth,
            email,
            password
        );
        const user = userCredential.user;
        console.log("User Registered: ", user);
        return { success: true, user };
    } catch (error) {
        console.error("Error during registration:", error);
        return { success: false, error: error.message };
    }
}

export async function POST(request: Request) {
    try {
        const { email, password } = await request?.json();
        console.log("Email: ", email, "Password: ", password);
        if (!email || !password) {
            return NextResponse.json(
                { error: "Email and password are required." },
                { status: 400 }
            );
        }
        const registrationResult = await registerUser(email, password);
        if (registrationResult.success) {
            return NextResponse.json({
                message: "Registration successful",
                user: registrationResult.user,
            });
        } else {
            return NextResponse.json(
                { error: registrationResult.error },
                { status: 500 }
            );
        }
    } catch (error) {
        console.error("Error during registration:", error);
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}
