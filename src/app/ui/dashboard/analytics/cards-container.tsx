"use client";
import { useEffect, useState } from "react";
import { Link, View } from "@lib/definitions";
import StatCard from "./stat-card";
export default function CardsContainer({ links }: { links: Link[] }) {
    const [totalLinks, setTotalLinks] = useState(0);
    const [totalClicks, setTotalClicks] = useState(0);
    const [totalUsers, setTotalUsers] = useState(0);

    useEffect(() => {
        const totalLinks = links.length;
        let totalClicks = 0;
        let uniqueLocations: string[] = [];
        let totalUsers = 0;

        links.forEach((link) => {
            totalClicks += link.views.length;
            link.views.forEach((view: View) => {
                if (!uniqueLocations.includes(view.location)) {
                    uniqueLocations.push(view.location);
                }
            });
            totalUsers = uniqueLocations.length;
        });
        setTotalLinks(totalLinks);
        setTotalClicks(totalClicks);
        setTotalUsers(totalUsers);
    }, [links]);

    return (
        <section className='grid grid-cols-3 gap-4'>
            <h2 className='sr-only'>Total Stats</h2>
            <StatCard data={totalClicks} name='Clicks' />
            <StatCard data={totalLinks} name='Links' />
            <StatCard data={totalUsers} name='Users' />
        </section>
    );
}
