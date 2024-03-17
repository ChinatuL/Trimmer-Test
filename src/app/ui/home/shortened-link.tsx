"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { QRCodeSVG } from "qrcode.react";
import { copyLinkToClipboard, formatHomePageLink } from "@lib/utilities/utils";
import copyIcon from "@icons/copy.svg";

export default function ShortenedLink({ shortLink }: { shortLink: string }) {
    const [buttonText, setButtonText] = useState("Copy");

    const formattedLink = formatHomePageLink(shortLink);

    function handleCopy() {
        copyLinkToClipboard(formattedLink);
        setButtonText("Copied!");
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setButtonText("Copy");
        }, 2000);
        return () => clearTimeout(timer);
    }, [buttonText]);

    return (
        <div className='flex flex-wrap gap-8 items-center mt-4 border px-4 py-2 border-zinc-50 w-max rounded'>
            <div className='flex flex-col gap-1'>
                <a href={formattedLink} rel='noreferrer' target='_blank'>
                    <p className='underline'>{formattedLink}</p>
                </a>
                <div className='flex gap-2'>
                    <button
                        onClick={handleCopy}
                        className='flex items-center gap-1 py-1 px-2 border border-purple rounded transitionEase hover:opacity-80'
                    >
                        <Image src={copyIcon} alt='' />
                        {buttonText}
                    </button>
                    <button>share</button>
                </div>
            </div>
            <QRCodeSVG value={shortLink} size={60} className='cursor-pointer' />
        </div>
    );
}
