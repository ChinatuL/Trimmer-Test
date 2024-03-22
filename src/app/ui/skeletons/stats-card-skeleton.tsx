import { shimmer } from "@utilities/utils";
export default function StatsCardSKeleton() {
    return (
        <div
            className={`${shimmer} relative overflow-hidden flex flex-col justify-center items-center gap-2 bg-skeletonBg w-full h-full py-4  rounded-xl`}
        >
            <div className='flex gap-4 justify-between w-full'></div>
        </div>
    );
}
