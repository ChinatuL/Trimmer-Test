"use client";
import { useState } from "react";
import LinkComponent from "./link";
import LinkDetails from "./link-details";
import EditLinkModal from "./edit-link-modal";
import DeleteLinkModal from "./delete-link-modal";

type LinkDetails = {
    id: string;
    longLink: string;
    shortLink: string;
    timestamp: string;
    views: { date: string; location: string }[];
};

export default function LinksList({ links }: { links: any[] }) {
    const [linkDetails, setLinkDetails] = useState({} as LinkDetails);
    const [showLink, setShowLink] = useState(false);
    const [linkId, setLinkId] = useState("");
    const [isEditing, setIsEditing] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);

    function handleLinkDetails(id: string) {
        if (links) {
            const link = links.find((link) => link?.id === id);
            if (!link) return;
            setLinkDetails(link);
            setShowLink(true);
        }
    }

    function openEditModal(id: string) {
        setIsEditing(true);
        setLinkId(id);
        console.log(id);
    }

    function openDeleteModal(id: string) {
        setIsDeleting(true);
        setLinkId(id);
        console.log(id);
    }

    return (
        <div>
            {links.map((link) => {
                return (
                    <LinkComponent
                        key={link.id}
                        {...link}
                        handleLinkDetails={handleLinkDetails}
                        openEditModal={openEditModal}
                        openDeleteModal={openDeleteModal}
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
            {isEditing && (
                <div
                    className={`fixed z-10 left-0 top-0 w-[100vw] h-[100vh] flex justify-center items-center ${
                        isEditing && "backdrop-blur"
                    }`}
                >
                    <EditLinkModal setIsEditing={setIsEditing} />
                </div>
            )}
            {isDeleting && (
                <div
                    className={`fixed z-10 left-0 top-0 w-[100vw] h-[100vh] flex justify-center items-center ${
                        isDeleting && "backdrop-blur"
                    }`}
                >
                    <DeleteLinkModal setIsDeleting={setIsDeleting} />
                </div>
            )}
        </div>
    );
}
