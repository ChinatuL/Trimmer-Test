import { shimmer } from "@utilities/utils";

export default function DailyStatsSkeleton() {
    return (
        <div className='flex flex-col gap-2'>
            <div
                className={`${shimmer} relative overflow-hidden w-28 h-6 rounded-xl bg-skeletonBg`}
            ></div>
            <div className='flex gap-4 justify-between'>
                <div
                    className={`${shimmer} relative overflow-hidden w-1/2 h-16 bg-skeletonBg rounded-xl`}
                ></div>
                <div
                    className={`${shimmer} relative overflow-hidden w-1/2 h-16 bg-skeletonBg rounded-xl`}
                ></div>
            </div>
        </div>
    );
}
