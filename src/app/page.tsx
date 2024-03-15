"use client";
import { useState } from "react";
import {
    makeUrlShort,
    copyLinkToClipboard,
    baseUrl,
} from "./lib/utilities/utils";
import { db } from "./lib/firebase/firebase-config";
import { collection, addDoc } from "firebase/firestore";
import { QRCodeSVG } from "qrcode.react";
import Header from "@ui/header/header";
import HomeComponent from "@ui/home/home";
import Features from "@ui/features/features";
import Pricing from "@ui/pricing/pricing";
import Reviews from "@ui/reviews/reviews";
import CallToAction from "@ui/call-to-action";
import Footer from "@ui/footer/footer";

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
            timestamp: new Date().toISOString(),
        };
        const linksRef = collection(db, "links");
        await addDoc(linksRef, linkObj);
        setLinks([...links, linkObj]);

        try {
            const res = await fetch(`${baseUrl}/api/links`);
            if (res.ok) {
                const data = await res.json();
                console.log(data);
            }
        } catch (error) {
            console.log(error);
        }
    }

    function handleCopy(e: React.MouseEvent<HTMLButtonElement>) {
        copyLinkToClipboard(`${baseUrl}s/${shortLink}`);
    }

    return (
        <div className='w-full'>
            <Header />
            <main>
                <HomeComponent handleSubmit={handleSubmit} />
                <Features />
                <Pricing />
                <Reviews />
                <CallToAction />
            </main>
            <Footer />
            {shortLink && (
                <div className='flex gap-8 items-center mt-8'>
                    <p>
                        Short Link : {baseUrl}s/{shortLink}
                    </p>
                    <button onClick={handleCopy}>Copy</button>
                    <QRCodeSVG value={longLink} />
                </div>
            )}
        </div>
    );
}
