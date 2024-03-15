"use client";
import { useState } from "react";
import LinkComponent from "./link";
import LinkDetails from "./link-details";

type LinkDetails = {
    id: number;
    longLink: string;
    shortLink: string;
    timestamp: string;
    views: { date: string; location: string }[];
};

export default function LinksList({ links }: { links: any[] }) {
    const [linkDetails, setLinkDetails] = useState({} as LinkDetails);
    const [showLink, setShowLink] = useState(false);


    function handleLinkDetails(id: number) {
        if (links) {
            const link = links.find((link) => link?.id === id);
            if (!link) return;
            setLinkDetails(link);
            setShowLink(true);
        }
    }

    return (
        <div>
            {links.map((link) => {
                return (
                    <LinkComponent
                        key={link.id}
                        {...link}
                        handleLinkDetails={handleLinkDetails}
                    />
                );
            })}
            {showLink && (
                <div
                    className={`fixed z-10 left-0 top-0 w-[100vw] h-[100vh] flex justify-center items-center ${
                        showLink && "backdrop-blur"
                    }`}
                >
                    <LinkDetails
                        setShowLink={setShowLink}
                        linkDetails={linkDetails}
                    />
                </div>
            )}
        </div>
    );
}
