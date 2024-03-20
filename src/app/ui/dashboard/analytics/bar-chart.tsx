"use client";

import { useState, useEffect } from "react";
import {
    ResponsiveContainer,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
    Legend,
} from "recharts";
import { getMonthName } from "@lib/utilities/utils";
import { Links, View } from "@lib/definitions";


export default function BarChartComponent({ links }: { links: Links[] }) {
    const [barChartData, setBarChartData] = useState({} as any);

    useEffect(() => {
        const currentYear = new Date().getFullYear();
        const currentMonth = new Date().getMonth();
        const yearStart = new Date(currentYear, 0, 1);
        const viewsInRange: View[] = [];

        links.forEach((link) => {
            const views = link.views;
            if (views.length > 0) {
                views.forEach((view: View) => {
                    const viewDate = new Date(view.date);
                    if (viewDate > yearStart) {
                        viewsInRange.push(view);
                    }
                });
            }
        });

        // aggregate views by month
        const monthlyViews: { [key: string]: number } = {};
        viewsInRange.forEach((view) => {
            const viewDate = new Date(view.date);
            const monthYear = `${viewDate.getFullYear()}-${
                viewDate.getMonth() + 1
            }`;
            if (!monthlyViews[monthYear]) {
                monthlyViews[monthYear] = 0;
            }
            monthlyViews[monthYear]++;
        });

        const chartData = [];
        const currentMonthIndex = currentMonth + 1;
        for (let i = 0; i < currentMonthIndex; i++) {
            const monthYear = `${currentYear}-${i + 1}`;
            const views = monthlyViews[monthYear] || 0;
            chartData.push({ name: getMonthName(i), views });
        }

        setBarChartData(chartData);
    }, [links]);


    return (
        <section className='py-4 px-8 bg-analyticsBg rounded-xl'>
            <div className='flex justify-between items-center pb-4'>
                <h2 className='text-lg font-semibold'>Stats</h2>
                <p className='font-semibold'>Yearly</p>
            </div>
            <ResponsiveContainer width='100%' height={350}>
                <BarChart data={barChartData} margin={{ top: 50 }}>
                    <CartesianGrid strokeDasharray='10 10' vertical={false} />
                    <XAxis dataKey='name' />
                    <YAxis allowDecimals={false} />
                    <Tooltip cursor={false} />
                    <Legend />
                    <Bar dataKey='views' fill='#9D37ED' barSize={30} />
                </BarChart>
            </ResponsiveContainer>
        </section>
    );
}
