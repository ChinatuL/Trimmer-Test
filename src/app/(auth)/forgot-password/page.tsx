"use client";
import Image from "next/image";
import { auth } from "@firebase/firebase-config";
import { sendPasswordResetEmail } from "firebase/auth";
import { useState } from "react";
import { toast } from "react-toastify";
import FormTitle from "@auth/form-title";
import AuthForm from "@auth/form";
import FormRow from "@auth/form-row";
import SubmitButton from "@auth/submit-button";
import forgotPasswordBg from "@images/bg-forgot-password.png";
import ButtonSpinner from "@/app/ui/button-spinner";

export default function Register() {
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState("");

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const email = new FormData(e.currentTarget).get("email") as string;
        if (!email) {
            setError("Please enter your email!");
            return;
        }
        setIsPending(true);
        try {
            const res = await sendPasswordResetEmail(auth, email);
            setError("");
            toast.success("Password reset email sent successfully!");
            setIsPending(false);
        } catch (error) {
            setIsPending(false);
            if (error.code === "auth/user-not-found") {
                setError("User not found! Please check your email address.");
            }
            console.error("Error during password reset:", error);
        }
    }

    return (
        <div className='flex justify-center items-center w-full h-full lg:w-[80%] max-w-[66rem] mx-auto font-normal lg:min-h-[95vh]'>
            <div className='hidden lg:block lg:w-[50%] lg:h-full lg:relative'>
                <Image
                    src={forgotPasswordBg}
                    alt=''
                    sizes='100%'
                    fill
                    priority
                />
            </div>
            <div className='lg:w-[50%] h-full bg-[#0B0A1E] px-8 py-10 md:px-14 text-zinc-50 rounded-r-lg'>
                <FormTitle
                    title='Forgot Password?'
                    desc='No worries! Enter the email address associated with your account'
                />
                <AuthForm handleSubmit={handleSubmit}>
                    <div className='grid gap-6 pt-4 w-full'>
                        <FormRow
                            labelText='email'
                            type='email'
                            name='email'
                            placeholder='Email Address'
                        />
                    </div>
                    {error && (
                        <p className='text-[0.75rem] pt-1 text-red-700'>
                            {error}
                        </p>
                    )}
                    <div className='grid gap-4 text-center pt-4 w-full'>
                        <SubmitButton>
                            {isPending ? <ButtonSpinner /> : "Submit"}
                        </SubmitButton>
                    </div>
                </AuthForm>
            </div>
        </div>
    );
}
