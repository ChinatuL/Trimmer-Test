"use client";
import { useState, useEffect } from "react";
import { disableScroll } from "@lib/utilities/utils";
import { Link } from "@lib/definitions";
import LinkComponent from "./link";
import LinkDetails from "./link-details";
import EditLinkModal from "./edit-link-modal";
import DeleteLinkModal from "./delete-link-modal";

type LinkListProps = {
    links: Link[];
    getLinks: () => Promise<void>;
};

export default function LinksList({ links, getLinks }: LinkListProps) {
    const [linkDetails, setLinkDetails] = useState("");
    const [showLink, setShowLink] = useState(false);
    const [linkId, setLinkId] = useState("");
    const [isEditing, setIsEditing] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);
    const [error, setError] = useState("");

    function handleLinkDetails(id: string) {
        const link = links.find((link) => link?.id === id);
        if (!link) return;
        setLinkDetails(link.shortLink);
        setShowLink(true);
        disableScroll();
    }

    function openEditModal(id: string) {
        setIsEditing(true);
        setLinkId(id);
        disableScroll();
    }

    function openDeleteModal(id: string) {
        setIsDeleting(true);
        setLinkId(id);
        disableScroll();
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
                setLinkId("");
                await getLinks();
                setIsDeleting(false);
            }
        } catch (error) {
            console.error(error);
        }
    }
    return (
        <div className='pb-6 px-4 rounded-xl bg-analyticsBg'>
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
