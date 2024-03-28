"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "@firebase/firebase-config";
import { saveUserToLocalStorage } from "@utilities/utils";
import FormTitle from "@auth/form-title";
import AuthForm from "@auth/form";
import FormRow from "@auth/form-row";
import SubmitButton from "@auth/submit-button";
import GoogleButton from "@auth/google-button";
import registerBg from "@images/bg-register.png";
import googleIcon from "@icons/google.svg";
import ButtonSpinner from "@ui/button-spinner";

export default function Login() {
    const router = useRouter();
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState("");

    async function handleSignInWithEmailAndPassword(
        e: React.FormEvent<HTMLFormElement>
    ) {
        const email = new FormData(e.currentTarget).get("email") as string;
        const password = new FormData(e.currentTarget).get(
            "password"
        ) as string;
        e.preventDefault();
        setIsPending(true);
        try {
            const res = await fetch("/api/login", {
                method: "POST",
                body: JSON.stringify({ email, password }),
            });
            if (res.ok) {
                const result = await res.json();
                setError("");
                saveUserToLocalStorage(result.user);
                setIsPending(false);
                router.replace("/dashboard");
            } else {
                const errorResponse = await res.json();
                console.error(errorResponse);
                setIsPending(false);
                setError("Login failed. Incorrect email or password.");
            }
        } catch (error) {
            setIsPending(false);
            console.error("Error during login:", error);
            setError("An unexpected error occurred. Please try again.");
        }
    }

    async function handleSignInWithGooglePopup() {
        try {
            const userCredential = await signInWithPopup(auth, provider);
            saveUserToLocalStorage(userCredential.user);
            if (!userCredential) return;
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
        <div className='flex justify-center items-center w-full h-full lg:w-[80%] max-w-[66rem] mx-auto font-normal lg:min-h-[95vh]'>
            <div className='hidden lg:block lg:w-[50%] lg:h-full lg:relative'>
                <Image src={registerBg} alt='' sizes='100%' fill priority />
            </div>
            <div className='lg:w-[50%] h-full bg-[#0B0A1E] px-8 py-10 md:px-14 text-zinc-50 rounded-r-lg'>
                <FormTitle
                    title='Welcome Back!'
                    desc='Enter your details below to sign in'
                />
                <AuthForm handleSubmit={handleSignInWithEmailAndPassword}>
                    <div className='grid gap-6 pt-4 w-full'>
                        <FormRow
                            labelText='email'
                            type='email'
                            name='email'
                            placeholder='Email Address'
                        />
                        <FormRow
                            labelText='password'
                            type='password'
                            name='password'
                            placeholder='Password'
                        />
                    </div>
                    {error && (
                        <p className='text-sm pt-2 text-red-700 content-start w-full'>
                            {error}
                        </p>
                    )}
                    <div className='flex justify-between items-center w-full text-sm pt-2 pb-4'>
                        <div className='flex gap-2 items-center'>
                            <input
                                type='checkbox'
                                name='remember-me'
                                id='remember-me'
                                className='rounded-sm border border-zinc-50 p-2  accent-purple w-4 h-4 '
                            />
                            <label htmlFor='remember-me' className=''>
                                Remember me
                            </label>
                        </div>
                        <Link
                            href='/forgot-password'
                            className='text-purple hover:opacity-70'
                        >
                            Forgot Password?
                        </Link>
                    </div>
                    <div className='grid gap-4 text-center pt-4'>
                        <SubmitButton>
                            {isPending ? <ButtonSpinner /> : "Sign In"}
                        </SubmitButton>
                        <GoogleButton handleClick={handleSignInWithGooglePopup}>
                            <span>
                                <Image src={googleIcon} alt='' />
                            </span>
                            <span> Sign In with Google</span>
                        </GoogleButton>
                        <p>
                            Don&apos;t have an account?{" "}
                            <Link
                                href='/register'
                                className='text-purple font-semibold hover:underline'
                            >
                                Sign Up
                            </Link>
                        </p>
                        <p className='text-[12px]'>
                            By signing in, you agree to our{" "}
                            <Link
                                href='/terms-of-service'
                                className='text-purple hover:underline'
                            >
                                Terms of Service
                            </Link>
                            ,{" "}
                            <Link
                                href='privacy-policy'
                                className='text-purple hover:underline'
                            >
                                Privacy Policy
                            </Link>{" "}
                            and{" "}
                            <Link
                                href='acceptable-use-policy'
                                className='text-purple hover:underline'
                            >
                                Acceptable Use Policy
                            </Link>
                            .
                        </p>
                    </div>
                </AuthForm>
            </div>
        </div>
    );
}
