import { shimmer } from "@utilities/utils";
export default function AnalyticsStatsCardSkeleton() {
    return (
        <div className='flex flex-col md:flex-row gap-2 md:gap-4 justify-center items-center bg-analyticsBg rounded-xl py-4 px-2'>
            <div
                className={`${shimmer} relative overflow-hidden w-12 h-12 md:w-14 md:h-14 rounded-full bg-skeletonBg`}
            ></div>
            <div className='flex flex-col text-center gap-2'>
                <div
                    className={`${shimmer} relative overflow-hidden w-16 h-6 rounded-xl bg-skeletonBg`}
                ></div>
                <div
                    className={`${shimmer} relative overflow-hidden w-16 h-6 rounded-xl bg-skeletonBg`}
                ></div>
            </div>
        </div>
    );
}
