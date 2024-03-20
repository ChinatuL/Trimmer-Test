type StatCardProps = {
    totalClicks: number;
    totalLinks: number;
};

export default function StatsCard({ totalClicks, totalLinks }: StatCardProps) {
    return (
        <div className='flex flex-col justify-center items-center gap-2 bg-analyticsBg w-full h-full py-4 border border-purple rounded-xl'>
            <div className='flex gap-4 justify-between w-full'>
                <div className='text-center  w-1/2  border-r border-r-zinc-50'>
                    <p className='font-semibold'>{totalClicks}</p>
                    <p className='text-sm'>
                        Total {totalClicks === 1 ? "Click" : "Clicks"}
                    </p>
                </div>
                <div className='text-center w-1/2 '>
                    <p className='font-semibold'>{totalLinks}</p>
                    <p className='text-sm'>
                        Total {totalLinks === 1 ? "Link" : "Links"}
                    </p>
                </div>
            </div>
        </div>
    );
}
