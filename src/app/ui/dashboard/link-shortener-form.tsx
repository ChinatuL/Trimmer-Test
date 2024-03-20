"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import { makeUrlShort } from "@lib/utilities/utils";
import arrowIcon from "@icons/arrow.svg";
import ButtonSpinner from "../button-spinner";

export default function LinkShortenerForm() {
    const router = useRouter();
    const [isPending, setIsPending] = useState(false);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsPending(true);
        const link = new FormData(e.currentTarget).get("link") as string;
        const shortenedLink = makeUrlShort(6);
        let linkObj = {
            longLink: link,
            shortLink: shortenedLink,
            timestamp: new Date().toISOString(),
            views: [],
        };
        try {
            const res = await fetch("/api/createLink", {
                method: "POST",
                body: JSON.stringify({ linkObj }),
            });
            if (res.ok) {
                const result = await res.json();
                setIsPending(false);
                router.push("/dashboard/links");
            }
        } catch (error) {
            setIsPending(false);
            console.error(error);
        }
    }

    return (
        <section className='flex flex-col justify-center items-center gap-4 w-full border border-purple rounded-xl text-center py-2 px-4 bg-analyticsBg '>
            <div className='flex flex-col gap-2'>
                <h2 className='text-lg font-semibold'>Create New Link</h2>
                <p>Create, Shorten and optimize your link</p>
            </div>
            <form
                onSubmit={handleSubmit}
                className='flex flex-col gap-4 justify-center items-center w-full'
            >
                <div className='flex gap-4'>
                    <label htmlFor='link' className='sr-only'>
                        Enter your link
                    </label>
                    <input
                        type='text'
                        name='link'
                        id='link'
                        placeholder='Paste your url here'
                        className='bg-transparent border border-purple rounded-xl px-4 py-2 placeholder:text-center placeholder:text-zinc-50 placeholder:opacity-60'
                    />
                </div>
                <button
                    type='submit'
                    className=' flex gap-2 items-center bg-purple text-zinc-50 py-2 px-4 rounded-lg hover:opacity-70 transitionEase'
                >
                    {isPending ? (
                        <ButtonSpinner />
                    ) : (
                        <>
                            <span>Create Link</span>
                            <Image src={arrowIcon} alt='' />
                        </>
                    )}
                </button>
            </form>
        </section>
    );
}
