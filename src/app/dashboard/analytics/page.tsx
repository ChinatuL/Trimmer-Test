"use client";
import { useState, useEffect } from "react";
import { Links } from "@lib/definitions";
import CalendarComponent from "@dashboard/analytics/calendar";
import CardsContainer from "@dashboard/analytics/cards-container";
import RecentActivities from "@dashboard/analytics/recent-activities";
import dynamic from "next/dynamic";

export default function Page() {
    const [links, setLinks] = useState<Links[]>([]);
    const [loading, setLoading] = useState(true);

    async function getLinks() {
        try {
            const res = await fetch("/api/authLinks");
            if (res.ok) {
                const result = await res.json();
                const links = result.links;
                console.log(links);
                setLinks(links);
                setLoading(false);
            }
        } catch (error) {
            console.error(error);
        }
    }

    const MyChart = dynamic(() => import("@dashboard/analytics/bar-chart"), {
        ssr: false,
    });

    useEffect(() => {
        getLinks();
    }, []);

    return (
        <div className='grid grid-cols-1 gap-4 bg-darkBlue px-4 py-6 rounded-xl'>
            <div className='grid grid-cols-1 lg:grid-cols-[1fr_350px] items-start gap-4'>
                <div className='grid grid-cols-1 gap-4'>
                    <CardsContainer links={links} />
                    <MyChart links={links} />
                </div>
                <CalendarComponent links={links} />
            </div>
            <RecentActivities links={links} />
        </div>
    );
}
