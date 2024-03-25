"use client";
import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import DailyStats from "./daily-stats";
import { Link, View } from "@lib/definitions";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function CalendarComponent({ links }: { links: Link[] }) {
    const [date, setDate] = useState<Value>(new Date());
    const [clicks, setClicks] = useState(0);
    const [totalLinks, setTotalLinks] = useState(0);

    function onChange(date: Value) {
        setDate(date);
    }

    useEffect(() => {
        let totalClicks = 0;
        let totalLinks = 0;
        let currentDate = date as Date;
        links.forEach((link) => {
            const linkDate = new Date(link.timestamp);
            if (linkDate.toDateString() === currentDate?.toDateString()) {
                totalLinks++;
            }
            link.views.forEach((view: View) => {
                const viewDate = new Date(view.date);

                if (viewDate.toDateString() === currentDate?.toDateString()) {
                    totalClicks++;
                }
            });
        });
        setClicks(totalClicks);
        setTotalLinks(totalLinks);
    }, [date, links]);

    return (
        <section className='flex flex-col gap-4 bg-analyticsBg rounded-xl px-4 py-6'>
            <h2 className='font-semibold text-lg'>Calendar</h2>
            <Calendar onChange={onChange} value={date} />
            <DailyStats clicks={clicks} totalLinks={totalLinks} />
        </section>
    );
}
