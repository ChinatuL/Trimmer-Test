"use client";
import { signInWithPopup } from "firebase/auth";
import { useState } from "react";
import { auth, provider } from "../lib/firebase/firebase-config";
import { useRouter } from "next/navigation";

export default function Login() {
    const router = useRouter();
    const [error, setError] = useState("");

    async function handleSignInWithEmail(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const email = new FormData(e.currentTarget).get("email") as string;
        const password = new FormData(e.currentTarget).get(
            "password"
        ) as string;
        try {
            const res = await fetch("/api/login", {
                method: "POST",
                body: JSON.stringify({ email, password }),
            });
            if (res.ok) {
                const result = await res.json();
                console.log(result);
                setError("");
                router.replace("/dashboard");
            } else {
                const errorResponse = await res.json();
                console.error(errorResponse);
                setError("Login failed. Incorrect email or password.");
            }
        } catch (error) {
            console.error("Error during login:", error);
            setError("An unexpected error occurred. Please try again.");
        }
    }

    async function handleSignInWithGooglePopup() {
        try {
            const userCredential = await signInWithPopup(auth, provider);
            if (!userCredential) {
                return;
            }
            const res = await fetch("/api/login", {
                method: "POST",
                body: JSON.stringify({}),
                headers: {
                    Authorization: `Bearer ${await userCredential.user.getIdToken()}`,
                },
            });
            if (res.status === 200) {
                router.replace("/dashboard");
            }
        } catch (error) {
            console.error("Error during login:", error);
            setError("An unexpected error occurred. Please try again.");
        }
    }

    return (
        <form className='flex flex-col gap-4' onSubmit={handleSignInWithEmail}>
            <div className='flex gap-4'>
                <label htmlFor='email'>Email</label>
                <input
                    type='email'
                    name='email'
                    id='email'
                    placeholder='Email'
                    className='bg-transparent border border-zinc-50 px-4 py-2'
                />
            </div>
            <div className='flex gap-4'>
                <label htmlFor='password'>Password</label>
                <input
                    type='password'
                    name='password'
                    id='password'
                    placeholder='Password'
                    className='bg-transparent border border-zinc-50 px-4 py-2'
                />
            </div>
            <button
                type='submit'
                className='bg-violet-800 text-zinc-50 py-2 px-2 w-auto'
            >
                Login
            </button>
            <button
                onClick={handleSignInWithGooglePopup}
                type='button'
                className='bg-violet-800 text-zinc-50 py-2 px-2 w-auto'
            >
                Sign in with Google
            </button>
            {error && <p className='text-red-500'>{error}</p>}
        </form>
    );
}
