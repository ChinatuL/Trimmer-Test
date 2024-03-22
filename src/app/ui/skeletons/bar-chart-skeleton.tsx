import { shimmer } from "@utilities/utils";
export default function BarChartSkeleton() {
    return (
        <div className='py-4 px-8 bg-analyticsBg rounded-xl'>
            <div className='flex justify-between items-center pb-4'>
                <div
                    className={`${shimmer} w-16 relative overflow-hidden h-6 bg-skeletonBg rounded-xl`}
                ></div>
                <p
                    className={`${shimmer} w-16 relative overflow-hidden h-6 bg-skeletonBg rounded-xl`}
                ></p>
            </div>
            <div className='w-full h-[350px] flex gap-4 items-end'>
                <div
                    className={`${shimmer} relative overflow-hidden h-10 w-8 bg-skeletonBg mb-5`}
                ></div>
                <div
                    className={`${shimmer} relative overflow-hidden h-60 w-8 bg-skeletonBg mb-5`}
                ></div>
                <div
                    className={`${shimmer} relative overflow-hidden h-20 w-8 bg-skeletonBg mb-5`}
                ></div>
                <div
                    className={`${shimmer} relative overflow-hidden h-72 w-8 bg-skeletonBg mb-5`}
                ></div>
                <div
                    className={`${shimmer} relative overflow-hidden h-44 w-8 bg-skeletonBg mb-5`}
                ></div>
                <div
                    className={`${shimmer} relative overflow-hidden h-20 w-8 bg-skeletonBg mb-5`}
                ></div>
                <div
                    className={`${shimmer} relative overflow-hidden h-10 w-8 bg-skeletonBg mb-5`}
                ></div>
                <div
                    className={`${shimmer} relative overflow-hidden h-10 w-8 bg-skeletonBg mb-5`}
                ></div>
                <div
                    className={`${shimmer} relative overflow-hidden h-36 w-8 bg-skeletonBg mb-5`}
                ></div>
                <div
                    className={`${shimmer} relative overflow-hidden h-40 w-8 bg-skeletonBg mb-5`}
                ></div>
                <div
                    className={`${shimmer} relative overflow-hidden h-80 w-8 bg-skeletonBg mb-5`}
                ></div>
            </div>
        </div>
    );
}
