type DailyStatsProps = {
    clicks: number;
    totalLinks: number;
};

export default function DailyStats({ clicks, totalLinks }: DailyStatsProps) {
    return (
        <div className='flex flex-col gap-2'>
            <h3 className='font-semibold text-lg'>Clicks/Links</h3>
            <div className='flex gap-4 justify-between'>
                <div className='text-center border-b-2 border-b-purple rounded-xl w-1/2 p-4'>
                    <p className='font-semibold'>{`${clicks} ${
                        clicks === 1 ? "Click" : "Clicks"
                    }`}</p>
                    <p className='text-sm font-bold'>Today</p>
                </div>
                <div className='text-center border-b-2 border-b-purple rounded-xl w-1/2 p-4'>
                    <p className='font-semibold'>
                        {`${totalLinks} ${totalLinks === 1 ? "Link" : "Links"}`}{" "}
                    </p>
                    <p className='text-sm font-bold'>Today</p>
                </div>
            </div>
        </div>
    );
}
