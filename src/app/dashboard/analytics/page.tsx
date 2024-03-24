"use client";
export const dynamic = "force-dynamic";
import { useState, useEffect } from "react";
import { Links } from "@lib/definitions";
import { getUserFromLocalStorage } from "@utilities/utils";
import CalendarComponent from "@dashboard/analytics/calendar";
import CardsContainer from "@dashboard/analytics/cards-container";
import RecentActivities from "@dashboard/analytics/recent-activities";
import BarChartComponent from "@dashboard/analytics/bar-chart";

export default function Page() {
    const [links, setLinks] = useState<Links[]>([]);

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
        <div className='grid grid-cols-1 gap-4 bg-darkBlue px-4 py-6 rounded-xl'>
            <div className='grid grid-cols-1 lg:grid-cols-[1fr_350px] items-start gap-4'>
                <div className='grid grid-cols-1 gap-4'>
                    <CardsContainer links={links} />
                    <BarChartComponent links={links} />
                </div>
                <CalendarComponent links={links} />
            </div>
            <RecentActivities links={links} />
        </div>
    );
}
