import { shimmer } from "@utilities/utils";
export default function LinkSkeleton() {
    return (
        <div className='w-full px-4'>
            <div className='flex flex-col gap-2 items-center border-b border-b-purple rounded-xl px-4 pt-4 pb-1'>
                <div className='flex flex-col gap-2 lg:grid lg:grid-cols-4 lg:items-center lg:gap-0 w-full'>
                    <div className='flex gap-2'>
                        <div
                            className={`${shimmer} relative overflow-hidden w-6 h-6 bg-skeletonBg rounded-xl`}
                        ></div>
                        <div
                            className={`${shimmer} relative overflow-hidden w-44 h-6 rounded-xl bg-skeletonBg`}
                        ></div>
                    </div>
                    <div className='justify-self-center flex flex-col gap-2'>
                        <div className='flex gap-2'>
                            <div
                                className={`${shimmer} relative overflow-hidden w-6 h-6 bg-skeletonBg rounded-xl`}
                            ></div>
                            <div
                                className={`${shimmer} relative overflow-hidden w-20 h-6 rounded-xl bg-skeletonBg`}
                            ></div>
                        </div>
                        <div className='flex gap-2'>
                            <div
                                className={`${shimmer} relative overflow-hidden w-6 h-6 bg-skeletonBg rounded-xl`}
                            ></div>
                            <div
                                className={`relative overflow-hidden w-20 h-6 rounded-xl bg-skeletonBg`}
                            ></div>
                        </div>
                    </div>
                    <div className='flex gap-2 justify-self-center'>
                        <div
                            className={`${shimmer} relative overflow-hidden w-6 h-6 bg-skeletonBg rounded-xl`}
                        ></div>
                        <div
                            className={`${shimmer} relative overflow-hidden w-32 h-6 rounded-xl bg-skeletonBg`}
                        ></div>
                    </div>
                    <div className='flex gap-3 justify-end  lg:justify-center items-center w-full'>
                        <div
                            className={`${shimmer} relative overflow-hidden w-10 h-6 bg-skeletonBg rounded-xl`}
                        ></div>
                        <div
                            className={`${shimmer} relative overflow-hidden w-10 h-6 bg-skeletonBg rounded-xl`}
                        ></div>
                        <div
                            className={`${shimmer} relative overflow-hidden w-10 h-6 bg-skeletonBg rounded-xl`}
                        ></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
