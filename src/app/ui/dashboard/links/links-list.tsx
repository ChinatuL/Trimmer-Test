"use client";
import { useState, useEffect } from "react";
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

type LinkListProps = {
    links: any[];
    getLinks: () => Promise<void>;
};

export default function LinksList({ links, getLinks }: LinkListProps) {
    const [linkDetails, setLinkDetails] = useState({} as LinkDetails);
    const [showLink, setShowLink] = useState(false);
    const [linkId, setLinkId] = useState("");
    const [isEditing, setIsEditing] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);
    const [error, setError] = useState("");

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
    }

    function openDeleteModal(id: string) {
        setIsDeleting(true);
        setLinkId(id);
    }

    async function editLink(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const customName = new FormData(e.currentTarget).get("custom-name");
        const id = linkId;
        console.log(id);
        try {
            const res = await fetch("/api/updateLink", {
                method: "POST",
                body: JSON.stringify({ id, customName }),
            });
            if (res.ok) {
                const result = await res.json();
                console.log(result);
                setLinkId("");
                await getLinks();
                setIsEditing(false);
            } else {
                const errResponse = await res.json();
                console.error(errResponse);
                setError(errResponse.error);
            }
        } catch (error) {
            console.error(error);
        }
    }

    async function deleteLink() {
        const id = linkId;
        try {
            const res = await fetch("/api/deleteLink", {
                method: "DELETE",
                body: JSON.stringify({ id }),
            });
            if (res.ok) {
                const result = await res.json();
                console.log(result);
                setLinkId("");
                await getLinks();
                setIsDeleting(false);
            }
        } catch (error) {
            console.error(error);
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
                    <EditLinkModal
                        setIsEditing={setIsEditing}
                        editLink={editLink}
                        error={error}
                    />
                </div>
            )}
            {isDeleting && (
                <div
                    className={`fixed z-10 left-0 top-0 w-[100vw] h-[100vh] flex justify-center items-center ${
                        isDeleting && "backdrop-blur"
                    }`}
                >
                    <DeleteLinkModal
                        setIsDeleting={setIsDeleting}
                        deleteLink={deleteLink}
                    />
                </div>
            )}
        </div>
    );
}
