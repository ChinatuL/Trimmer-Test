"use client";
import { useState, useEffect } from "react";
import { formatLink } from "@/app/lib/utilities/utils";
import { Links } from "@lib/definitions";

export default function RecentActivities({ links }: { links: Links[] }) {
    const [recentLinks, setRecentLinks] = useState<Links[]>([]);

    useEffect(() => {
        // get the last 2 links created
        const lastTwoLinks = links.slice(-2);
        setRecentLinks(lastTwoLinks);
    }, [links]);

    return (
        <section className='flex flex-col gap-2 bg-analyticsBg p-4 rounded-xl'>
            <h2 className='text-lg font-semibold'>Recent Links</h2>
            <div className='grid grid-col-1 gap-4'>
                {recentLinks.map((link: any) => {
                    const { id, shortLink } = link;
                    const formattedLink = formatLink(shortLink);
                    return (
                        <div
                            key={id}
                            className='p-4 border-l-2 border-l-purple border-b-2 border-b-purple rounded-lg'
                        >
                            {formattedLink}
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
