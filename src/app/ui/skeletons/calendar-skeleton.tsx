import { shimmer } from "@utilities/utils";
import DailyStatsSkeleton from "./daily-stats-skeleton";
export default function CalendarSkeleton() {
    return (
        <div className='flex flex-col gap-4 bg-analyticsBg rounded-xl px-4 py-6'>
            <div
                className={`${shimmer} relative overflow-hidden w-28 h-6 rounded-xl bg-skeletonBg`}
            ></div>
            <div
                className={`${shimmer} relative overflow-hidden w-full h-[300px] bg-skeletonBg rounded-xl`}
            ></div>
            <DailyStatsSkeleton />
        </div>
    );
}
