"use client";
export const dynamic = "force-dynamic";
import { useState, useEffect } from "react";
import { getTotalClicks, getTotalLinks } from "@lib/actions";
import { Links } from "@lib/definitions";
import BarChartComponent from "@dashboard/analytics/bar-chart";
import StatsCard from "@dashboard/stats-card";
import LinkShortenerForm from "@dashboard/link-shortener-form";
import RecentActivities from "@dashboard/analytics/recent-activities";
import QrCodeComponent from "@dashboard/qr-code";

export default function Page() {
    const [links, setLinks] = useState<Links[]>([]);
    const [totalLinks, setTotalLinks] = useState(0);
    const [totalClicks, setTotalClicks] = useState(0);

    useEffect(() => {
        async function getLinks() {
            try {
                const res = await fetch("/api/authLinks");
                if (res.ok) {
                    const result = await res.json();
                    const links = result.links;
                    setLinks(links);
                    setTotalLinks(getTotalLinks(links));
                    setTotalClicks(getTotalClicks(links));
                }
            } catch (error) {
                console.error(error);
            }
        }
        getLinks();
    }, []);

    return (
        <div className="grid grid-cols-1 gap-8 bg-darkBlue px-4 py-6 rounded-xl'">
            <div className='grid grid-cols-1 lg:grid-cols-[1fr_350px] bg-analyticsBg gap-4 py-4 px-4 rounded-xl'>
                <div>
                    <BarChartComponent links={links} />
                </div>
                <div className='grid grid-cols-1 order-first lg:order-none gap-4 w-full'>
                    <StatsCard
                        totalClicks={totalClicks}
                        totalLinks={totalLinks}
                    />
                    <LinkShortenerForm />
                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-6'>
                <RecentActivities links={links} />
                <QrCodeComponent />
            </div>
        </div>
    );
}
