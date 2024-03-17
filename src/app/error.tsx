"use client";

import { useEffect } from "react";
import errorBg from "@icons/global-error.svg";
import Image from "next/image";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className='flex justify-center items-center md:bg-auth-bg bg-cover w-full h-[100vh] text-zinc-50'>
            <div className='flex flex-col justify-center items-center py-8 px-8 rounded bg-darkBlue text-zinc-50 w-[100vw] h-[100vh] md:w-[80vw] md:h-[90vh] mx-auto'>
                <Image src={errorBg} alt='' />
                <div className='pt-8 text-center'>
                    <h1 className='font-semibold text-3xl'>OOPS!</h1>
                    <p className='text-lg pb-4'>
                        An error occurred but it&apos;s not your fault
                    </p>
                    <button
                        onClick={() => reset()}
                        className='px-4 py-2 bg-purple rounded-lg hover:opacity-70 transitionEase'
                    >
                        Try again
                    </button>
                </div>
            </div>
        </div>
    );
}
