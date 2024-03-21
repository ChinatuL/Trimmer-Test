import { NextResponse } from "next/server";
import { registerUser } from "@firebase/auth/register-action";

export async function POST(request: Request) {
    try {
        const { fullName, email, password } = await request?.json();
        console.log(
            "Full Name :",
            fullName,
            "Email: ",
            email,
            "Password: ",
            password
        );
        if (!email || !password || !fullName) {
            return NextResponse.json(
                { error: "FullName, Email and password are required." },
                { status: 400 }
            );
        }
        const registrationResult = await registerUser(
            email,
            password,
            fullName
        );
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
