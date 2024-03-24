"use client";
export const dynamic = "force-dynamic";
import { useEffect, useState } from "react";
import { getUserFromLocalStorage } from "@utilities/utils";
import LinksList from "@dashboard/links/links-list";
export default function Page() {
    const [links, setLinks] = useState([] as any[]);
    async function getLinks() {
        try {
            const res = await fetch("/api/links");
            if (res.ok) {
                const result = await res.json();
                const user = getUserFromLocalStorage();
                const userId = user.uid;
                const links = result.links.filter(
                    (link: any) => link.userId === userId
                );
                console.log(links);
                setLinks(links);
            }
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getLinks();
    }, []);

    return (
        <section className='bg-darkBlue py-6 px-4 h-full'>
            <LinksList links={links} getLinks={getLinks} />
        </section>
    );
}
