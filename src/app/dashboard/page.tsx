"use client";
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import { auth } from "../lib/firebase/firebase-config";
import { addDoc } from "firebase/firestore";
import {
    baseUrl,
    makeUrlShort,
    copyLinkToClipboard,
    saveUserToLocalStorage,
} from "../lib/utilities/utils";
import { useState } from "react";
import { db } from "../lib/firebase/firebase-config";
import { setDoc, doc } from "firebase/firestore";
import { nanoid } from "nanoid";
import { QRCodeSVG } from "qrcode.react";
import { useUser } from "../context/user-context";

export default function Page() {
    const router = useRouter();
    const [shortLink, setShortLink] = useState("");
    const [longLink, setLongLink] = useState("");
    const { user } = useUser();

    async function logout() {
        await signOut(auth);
        const response = await fetch(`${baseUrl}/api/logout`, {
            method: "POST",
        });
        if (response.status === 200) {
            saveUserToLocalStorage(null);
            router.push("/login");
        }
    }

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
        };
        console.log(user);
        const userRef = doc(db, "users", `${user.uid}`);
        await setDoc(userRef, { email: user.email }, { merge: true });
        const linksRef = doc(userRef, "links", nanoid());
        await setDoc(linksRef, linkObj, { merge: true });
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
            <button
                className='bg-violet-800 text-zinc-50 py-2 px-2 w-auto'
                onClick={logout}
            >
                Logout
            </button>
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
                        <button
                            onClick={deleteLink}
                            className='bg-violet-800 text-zinc-50 py-2 px-2 w-auto'
                        >
                            Delete
                        </button>
                        <button
                            onClick={deleteLink}
                            className='bg-violet-800 text-zinc-50 py-2 px-2 w-auto'
                        >
                            Edit
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
