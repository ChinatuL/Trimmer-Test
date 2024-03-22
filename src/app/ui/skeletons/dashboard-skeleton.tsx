import BarChartSkeleton from "./bar-chart-skeleton";
import StatsCardSKeleton from "./stats-card-skeleton";
import LinkFormSkeleton from "./link-form-skeleton";
import RecentActivitiesSkeleton from "./recent-activities-skeleton";
import QrCodeSkeleton from "./qr-code-skeleton";

export default function DashboardSkeleton() {
    return (
        <div className="grid grid-cols-1 gap-8 bg-darkBlue px-4 py-6 rounded-xl'">
            <div className='grid grid-cols-1 lg:grid-cols-[1fr_350px] bg-analyticsBg gap-4 py-4 px-4 rounded-xl'>
                <div>
                    <BarChartSkeleton />
                </div>
                <div className='grid grid-cols-1 order-first lg:order-none gap-4 w-full'>
                    <StatsCardSKeleton />
                    <LinkFormSkeleton />
                    {/* <StatsCard
                      totalClicks={totalClicks}
                      totalLinks={totalLinks}
                  /> */}
                    {/* <LinkShortenerForm /> */}
                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-6'>
                <RecentActivitiesSkeleton />
                <QrCodeSkeleton />
            </div>
        </div>
    );
}
