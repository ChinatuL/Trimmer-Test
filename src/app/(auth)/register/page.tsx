"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import FormTitle from "@auth/form-title";
import AuthForm from "@auth/form";
import FormRow from "@auth/form-row";
import SubmitButton from "@auth/submit-button";
import GoogleButton from "@auth/google-button";
import registerBg from "@images/bg-register.png";
import googleIcon from "@icons/google.svg";
import ButtonSpinner from "@ui/button-spinner";

export default function Page() {
    const router = useRouter();
    const [error, setError] = useState("");
    const [isPending, setIsPending] = useState(false);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        const email = new FormData(e.currentTarget).get("email") as string;
        const password = new FormData(e.currentTarget).get(
            "password"
        ) as string;
        e.preventDefault();
        setIsPending(true);
        try {
            const res = await fetch("/api/register", {
                method: "POST",
                body: JSON.stringify({ email, password }),
            });
            if (res.ok) {
                const result = await res.json();
                console.log(result);
              setError("");
              setIsPending(false)
                router.push("/login");
            } else {
                const errorResponse = await res.json();
                console.log(errorResponse);
                setIsPending(false)
                setError(errorResponse);
            }
        } catch (error) {
            console.log("Error during registration", error);
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
                    title='Let’s Get Started'
                    desc='Enter your details below to register'
                />
                <AuthForm handleSubmit={handleSubmit}>
                    <div className='grid gap-6 pt-4 w-full'>
                        <FormRow
                            labelText='full name'
                            type='text'
                            name='fullName'
                            placeholder='Full Name'
                        />
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
                        {/* error messages */}
                    </div>
                    {error && (
                        <p className='text-sm pt-2 text-red-700 content-start w-full'>
                            {error}
                        </p>
                    )}
                    <div className='grid gap-4 text-center pt-4'>
                        <SubmitButton>
                            {isPending ? <ButtonSpinner /> : "Sign Up"}
                        </SubmitButton>
                        {/* <GoogleButton>
                            <span>
                                <Image src={googleIcon} alt='' />
                            </span>
                            <span> Sign Up with Google</span>
                        </GoogleButton> */}
                        <p>
                            Already have an account?{" "}
                            <Link
                                href='/login'
                                className='text-purple font-semibold hover:underline'
                            >
                                Sign in
                            </Link>
                        </p>
                        <p className='text-[12px]'>
                            By signing up, you agree to our{" "}
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
