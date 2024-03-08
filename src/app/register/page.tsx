"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Register() {
    const router = useRouter();
    const [error, setError] = useState("");

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        const email = new FormData(e.currentTarget).get("email") as string;
        const password = new FormData(e.currentTarget).get(
            "password"
        ) as string;
        e.preventDefault();
        try {
            const res = await fetch("/api/register", {
                method: "POST",
                body: JSON.stringify({ email, password }),
            });
            if (res.ok) {
                const result = await res.json();
                console.log(result);
                setError("");
                router.push("/login");
            } else {
                const errorResponse = await res.json();
                console.log(errorResponse);
                setError(
                    "Registration failed. Check your credentials and try again."
                );
            }
        } catch (error) {
            console.log("Error during registration", error);
            setError("An unexpected error occurred. Please try again.");
        }
    }

    return (
        <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
            <div className='flex gap-4'>
                <label htmlFor='name'>Full name</label>
                <input
                    type='text'
                    name='name'
                    id='name'
                    placeholder='Full name'
                    className='bg-transparent border border-zinc-50 px-4 py-2'
                />
            </div>
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
                Register
            </button>
            {error && <p className='text-red-500'>{error}</p>}
        </form>
    );
}
