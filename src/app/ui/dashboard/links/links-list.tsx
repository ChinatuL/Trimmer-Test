"use client";
import { links } from "@lib/data";
import { useState } from "react";
import LinkComponent from "./link";
import LinkDetails from "./link-details";

type LinkDetails = {
    id: number;
    longUrl: string;
    shortUrl: string;
    date: string;
    clicks: number;
};

export default function LinksList() {
    const [linksList, setLinksList] = useState(links);
    const [linkDetails, setLinkDetails] = useState({} as LinkDetails);
    const [showLink, setShowLink] = useState(false);

    function handleLinkDetails(id: number) {
        // search in links array for the link with the same id as the react key of the clicked link
        const link = linksList.find((link) => link.id === id);
        if (!link) return;
        setLinkDetails(link);
        setShowLink(true);
    }

    return (
        <div>
            {linksList.map((link) => {
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
