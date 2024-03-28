"use client";
export const dynamic = "force-dynamic";
import { useEffect, useState } from "react";
import { getUserFromLocalStorage } from "@utilities/utils";
import { Link } from "@lib/definitions";
import LinksList from "@dashboard/links/links-list";
export default function Page() {
    const [links, setLinks] = useState<Link[]>([]);
    const [loading, setLoading] = useState(false);
    async function getLinks() {
        try {
            setLoading(true);
            const res = await fetch("/api/links");
            if (res.ok) {
                const result = await res.json();
                const user = getUserFromLocalStorage();
                const userId = user.uid;
                const links = result.links.filter(
                    (link: Link) => link.userId === userId
                );
              setLinks(links);
              setLoading(false);
            }
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getLinks();
    }, []);

    if (!loading && links.length === 0) {
        return (
            <h2 className='text-2xl text-center pt-8'>
                You haven&apos;t shortened any links
            </h2>
        );
    }

    return (
        <section className='bg-darkBlue py-6 px-4 h-full'>
            <LinksList links={links} getLinks={getLinks} />
        </section>
    );
}
