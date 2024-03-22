import { shimmer } from "@utilities/utils";
export default function RecentActivitiesSkeleton() {
    return (
        <div className='flex flex-col gap-2 bg-analyticsBg p-4 rounded-xl'>
            <div
                className={`${shimmer} relative overflow-hidden w-24 h-6 rounded-xl bg-skeletonBg`}
            ></div>
            <div className='grid grid-col-1 gap-4 pt-4'>
                <div
                    className={`${shimmer} relative overflow-hidden p-4 border-l-8 border-l-skeletonBg border-b-8 border-b-skeletonBg rounded-xl`}
                >
                    <div
                        className={`${shimmer} relative overflow-hidden w-56 h-6 bg-skeletonBg rounded-xl`}
                    ></div>
                </div>
                <div
                    className={`${shimmer} relative overflow-hidden p-4 border-l-8 border-l-skeletonBg border-b-8 border-b-skeletonBg rounded-xl`}
                >
                    <div
                        className={`${shimmer} relative overflow-hidden w-56 h-6 bg-skeletonBg rounded-xl`}
                    ></div>
                </div>
                <div
                    className={`${shimmer} relative overflow-hidden p-4 border-l-8 border-l-skeletonBg border-b-8 border-b-skeletonBg rounded-xl`}
                >
                    <div
                        className={`${shimmer} relative overflow-hidden w-56 h-6 bg-skeletonBg rounded-xl`}
                    ></div>
                </div>
            </div>
        </div>
    );
}
