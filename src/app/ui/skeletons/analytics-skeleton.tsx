import AnalyticsStatsCardSkeleton from "./analytics-stats-card";
import BarChartSkeleton from "./bar-chart-skeleton";
import RecentActivitiesSkeleton from "./recent-activities-skeleton";
import CalendarSkeleton from "./calendar-skeleton";
export default function AnalyticsSkeleton() {
    return (
        <div className='grid grid-cols-1 gap-4 bg-darkBlue px-4 py-6 rounded-xl'>
            <div className='grid grid-cols-1 lg:grid-cols-[1fr_350px] items-start gap-4'>
                <div className='grid grid-cols-1 gap-4'>
                    <div className='grid grid-cols-3 gap-4'>
                        <AnalyticsStatsCardSkeleton />
                        <AnalyticsStatsCardSkeleton />
                        <AnalyticsStatsCardSkeleton />
                    </div>
                    <BarChartSkeleton />
                </div>
                <CalendarSkeleton />
            </div>
            <RecentActivitiesSkeleton />
        </div>
    );
}
