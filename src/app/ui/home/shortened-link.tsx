"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { QRCodeSVG } from "qrcode.react";
import {
    copyLinkToClipboard,
    formatLink,
    shareLink,
    disableScroll,
} from "@utilities/utils";
import copyIcon from "@icons/copy.svg";
import shareIcon from "@icons/share.svg";
import QrCodeModal from "@ui/qrcode-modal";

export default function ShortenedLink({ shortLink }: { shortLink: string }) {
    const [buttonText, setButtonText] = useState("Copy");
    const [openQrCode, setOpenQrCode] = useState(false);

    const formattedLink = formatLink(shortLink);

    function handleCopy() {
        copyLinkToClipboard(formattedLink);
        setButtonText("Copied!");
    }

    function openQrCodeModal() {
        setOpenQrCode(true);
        disableScroll();
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setButtonText("Copy");
        }, 2000);
        return () => clearTimeout(timer);
    }, [buttonText]);

    return (
        <>
            {openQrCode && (
                <div className='fixed z-10 left-0 top-0 w-[100vw] h-[100vh] flex justify-center items-center p-8 backdrop-blur-sm'>
                    <QrCodeModal
                        shortLink={shortLink}
                        setOpenQrCode={setOpenQrCode}
                    />
                </div>
            )}
            <div className='flex flex-wrap gap-8 items-center mt-4 border px-4 py-2 border-zinc-50 w-max rounded'>
                <div className='flex flex-col gap-1'>
                    <a href={formattedLink} rel='noreferrer' target='_blank'>
                        <p className='underline'>{formattedLink}</p>
                    </a>
                    <div className='flex items-center gap-2'>
                        <button
                            onClick={handleCopy}
                            className='flex items-center gap-1 py-1 px-2 border border-purple rounded transitionEase hover:opacity-70'
                        >
                            <Image src={copyIcon} alt='' />
                            {buttonText}
                        </button>
                        <button
                            onClick={() => shareLink(formattedLink)}
                            className='flex items-center gap-1 py-1 px-2 border border-purple rounded transitionEase hover:opacity-70'
                        >
                            <Image src={shareIcon} alt='' />
                            Share
                        </button>
                        <QRCodeSVG
                            onClick={openQrCodeModal}
                            value={shortLink}
                            size={30}
                            className='cursor-pointer'
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
