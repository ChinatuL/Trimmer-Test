import { shimmer } from "@utilities/utils";
export default function QrCodeSkeleton() {
    return (
        <div className='flex flex-col justify-center items-center gap-4 text-center w-full bg-analyticsBg rounded-xl py-6 px-4'>
            <div
                className={`${shimmer} relative overflow-hidden w-24 h-6 bg-skeletonBg rounded-xl`}
            ></div>
            <div>
                <div
                    className={`${shimmer} relative overflow-hidden w-32 h-32 bg-skeletonBg rounded-xl`}
                ></div>
            </div>
            <div className='flex gap-2 items-center'>
                <div
                    className={`${shimmer} relative overflow-hidden w-8 h-6 bg-skeletonBg rounded-xl`}
                ></div>
                <div
                    className={`${shimmer} relative overflow-hidden w-56 h-6 bg-skeletonBg rounded-xl`}
                ></div>
            </div>
            <div className='flex gap-2 items-center'>
                <div
                    className={`${shimmer} relative overflow-hidden w-8 h-6 bg-skeletonBg rounded-xl`}
                ></div>
                <div
                    className={`${shimmer} relative overflow-hidden w-56 h-6 bg-skeletonBg rounded-xl`}
                ></div>
            </div>
        </div>
    );
}
