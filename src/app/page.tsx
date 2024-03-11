"use client";
import { useState } from "react";
import { makeUrlShort, copyLinkToClipboard } from "./lib/utilities/utils";
import { db } from "./lib/firebase/firebase-config";
import { collection, addDoc } from "firebase/firestore";
import { QRCodeSVG } from "qrcode.react";

export default function Home() {
    const [shortLink, setShortLink] = useState("");
    const [longLink, setLongLink] = useState("");
    const [links, setLinks] = useState<any>([]);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const link = new FormData(e.currentTarget).get("link") as string;
        setLongLink(link);
        const shortenedLink = makeUrlShort(6);
        setShortLink(shortenedLink);
        let linkObj = {
            longLink: link,
            shortLink: shortenedLink,
        };
        const linksRef = collection(db, "links");
        await addDoc(linksRef, linkObj);
        setLinks([...links, linkObj]);
    }
  
  function handleCopy(e:React.MouseEvent<HTMLButtonElement>) {
    copyLinkToClipboard(`localhost:3000/s/${shortLink}`)
  }

    return (
        <main className='flex min-h-screen flex-col items-center p-24'>
            <h1>Welcome to Trimmer</h1>
            <form onSubmit={handleSubmit}>
                <div className='flex gap-4'>
                    <label htmlFor='link'>Email</label>
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
                    <p>Short Link : localhost:3000/s/{shortLink}</p>
                    <button onClick={handleCopy}>Copy</button>
                    <QRCodeSVG value={longLink} />
                </div>
            )}
        </main>
    );
}
