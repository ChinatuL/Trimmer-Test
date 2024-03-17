"use client";
import { useState } from "react";
import { makeUrlShort } from "@lib/utilities/utils";
import { db } from "@firebase/firebase-config";
import { collection, addDoc } from "firebase/firestore";
import Header from "@ui/header/header";
import HomeComponent from "@ui/home/home";
import Features from "@ui/features/features";
import Pricing from "@ui/pricing/pricing";
import Reviews from "@ui/reviews/reviews";
import CallToAction from "@ui/call-to-action";
import Footer from "@ui/footer/footer";

export default function Home() {
    const [shortLink, setShortLink] = useState("");

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const link = new FormData(e.currentTarget).get("link") as string;
        const shortenedLink = makeUrlShort(6);
        setShortLink(shortenedLink);
        let linkObj = {
            longLink: link,
            shortLink: shortenedLink,
            timestamp: new Date().toISOString(),
        };
        const linksRef = collection(db, "links");
        try {
            const res = await addDoc(linksRef, linkObj);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='w-full'>
            <Header />
            <main>
                <HomeComponent
                    handleSubmit={handleSubmit}
                    shortLink={shortLink}
                />
                <Features />
                <Pricing />
                <Reviews />
                <CallToAction />
            </main>
            <Footer />
        </div>
    );
}
