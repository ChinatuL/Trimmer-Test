"use client";
import { useState, useEffect } from "react";
import { formatLink } from "@/app/lib/utilities/utils";
import { Link } from "@lib/definitions";

export default function RecentActivities({ links }: { links: Link[] }) {
    const [recentLinks, setRecentLinks] = useState<Link[]>([]);

  useEffect(() => {
      const lastThreeLinks = links.slice(0, 3);
        setRecentLinks(lastThreeLinks);
    }, [links]);

    return (
        <section className='flex flex-col gap-2 bg-analyticsBg p-4 rounded-xl'>
        <h2 className='text-lg font-semibold'>{links.length > 0 ? "Recent Links" : "No links"}</h2>
            <div className='grid grid-col-1 gap-4'>
                {recentLinks.map((link: Link) => {
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
