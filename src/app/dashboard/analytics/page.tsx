"use client";
import { useState, useEffect } from "react";
import { Link } from "@lib/definitions";
import { getUserFromLocalStorage } from "@utilities/utils";
import CalendarComponent from "@analytics/calendar";
import CardsContainer from "@analytics/cards-container";
import RecentActivities from "@analytics/recent-activities";
import BarChartComponent from "@analytics/bar-chart";

export default function Page() {
    const [links, setLinks] = useState<Link[]>([]);

    async function getLinks() {
        try {
            const res = await fetch("/api/links");
            if (res.ok) {
                const result = await res.json();
                const user = getUserFromLocalStorage();
                const userId = user.uid;
                const links = result.links.filter(
                    (link: Link) => link.userId === userId
                );
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
