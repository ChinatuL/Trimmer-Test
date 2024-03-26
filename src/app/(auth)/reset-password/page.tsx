"use client";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { auth } from "@firebase/firebase-config";
import { confirmPasswordReset } from "firebase/auth";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import Image from "next/image";
import FormTitle from "@auth/form-title";
import AuthForm from "@auth/form";
import FormRow from "@auth/form-row";
import SubmitButton from "@auth/submit-button";
import forgotPasswordBg from "@images/bg-forgot-password.png";
import ButtonSpinner from "@ui/button-spinner";

export default function Page() {
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState("");
    const searchParams = useSearchParams();
    const router = useRouter();
    const oobCode = searchParams.get("oobCode");

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        const password = new FormData(e.currentTarget).get(
            "password"
        ) as string;
        const confirmPassword = new FormData(e.currentTarget).get(
            "confirm-password"
        ) as string;
        e.preventDefault();
        if (!password || !confirmPassword) {
            setError("Please enter your new password!");
            return;
        }
        setIsPending(true);
        try {
            if (!oobCode) return setError("Invalid or expired reset link");
            const res = await confirmPasswordReset(auth, oobCode, password);
            setError("");
            toast.success("Password reset successful!");
            setTimeout(() => {
                router.push("/login");
            }, 1000);
        } catch (error) {
            console.error("Error during password reset:", error);
        }
    }

    return (
        <div className='flex justify-center items-center w-full h-full lg:w-[80%] max-w-[66rem] mx-auto font-normal lg:min-h-[95vh]'>
            <div className='hidden lg:block lg:w-[50%] lg:h-full relative'>
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
                    title='Reset Password'
                    desc='Enter your new password below'
                />
                <AuthForm handleSubmit={handleSubmit}>
                    <div className='grid gap-6 pt-4 w-full'>
                        <FormRow
                            labelText='password'
                            type='password'
                            name='password'
                            placeholder='New Password'
                        />
                        <FormRow
                            labelText='password'
                            type='password'
                            name='confirm-password'
                            placeholder='Confirm New Password'
                        />
                    </div>
                    {error && (
                        <p className='text-[0.75rem] pt-1 text-red-700'>
                            {error}
                        </p>
                    )}
                    <div className='grid gap-4 text-center pt-4 w-full'>
                        <SubmitButton>
                            {isPending ? <ButtonSpinner /> : "Reset"}
                        </SubmitButton>
                    </div>
                </AuthForm>
            </div>
        </div>
    );
}
