"use client";

import {
    baseUrl,
    makeUrlShort,
    copyLinkToClipboard,
} from "../lib/utilities/utils";
import { useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import { useUser } from "../context/user-context";

export default function Page() {
    
    const [shortLink, setShortLink] = useState("");
    const [longLink, setLongLink] = useState("");
    const { user } = useUser();

    

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const link = new FormData(e.currentTarget).get("link") as string;
        setLongLink(link);
        const shortenedLink = makeUrlShort(6);
        setShortLink(shortenedLink);
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
                console.log(result);
            }
        } catch (error) {
            console.error(error);
        }
    }

    function handleCopy(e: React.MouseEvent<HTMLButtonElement>) {
        copyLinkToClipboard(`${baseUrl}as/${shortLink}`);
    }

    function deleteLink() {
        console.log("link deleted");
    }

    return (
        <div>
            <h1>Dashboard</h1>
            <div className='mt-10'>
                <form onSubmit={handleSubmit}>
                    <div className='flex gap-4'>
                        <label htmlFor='link'>Link</label>
                        <input
                            type='text'
                            name='link'
                            id='link'
                            placeholder='Enter a link to shorten'
                            className='bg-transparent border border-zinc-50 px-4 py-2'
                        />
                    </div>
                    <button className='bg-violet-800 text-zinc-50 py-2 px-2 w-auto'>
                        Trim
                    </button>
                </form>
                {shortLink && (
                    <div className='flex gap-8 items-center mt-8'>
                        <p>
                            Short Link : {baseUrl}as/{shortLink}
                        </p>
                        <QRCodeSVG value={longLink} />
                        <button
                            onClick={handleCopy}
                            className='bg-violet-800 text-zinc-50 py-2 px-2 w-auto'
                        >
                            Copy
                        </button>
                        
                    </div>
                )}
            </div>
        </div>
    );
}
