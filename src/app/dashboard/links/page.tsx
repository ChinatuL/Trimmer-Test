"use client";
import { useEffect, useState } from "react";
import LinksList from "@dashboard/links/links-list";
export default function Page() {
    const [links, setLinks] = useState([] as any[]);
    const [loading, setLoading] = useState(true);

    async function getLinks() {
        try {
            const res = await fetch("/api/authLinks");
            if (res.ok) {
                const result = await res.json();
                console.log(result);
                const links = result.links;
                console.log(links);
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

    // check if loading is not done
    if (loading) {
        return <p className='text-4xl'>Loading...</p>;
    }

    // check if loading is done and there are no links
    if (!loading && links.length === 0) {
        return <p className='text-3xl'>No links yet</p>;
    }

    return (
        <section className='bg-darkBlue py-6 px-4 h-full'>
            <LinksList links={links} getLinks={getLinks} />
        </section>
    );
}
