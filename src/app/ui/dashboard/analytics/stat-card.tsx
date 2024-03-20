type StatCardProps = {
    data: number;
    name: string;
};

export default function StatCard({ data, name }: StatCardProps) {
    return (
        <div className='flex flex-col md:flex-row gap-2 md:gap-4 justify-center items-center bg-analyticsBg rounded-xl py-4 px-2'>
            <div
                className={`w-12 h-12 md:w-14 md:h-14 border-8 rounded-full ${
                    name === "Clicks"
                        ? "border-r-[#DEBCF9] border-b-purple border-l-purple border-t-[#DEBCF9]"
                        : name === "Links"
                        ? "border-r-[#393198] border-b-[#393198] border-l-zinc-50 border-t-zinc-50"
                        : "border-r-[#DEBCF9] border-b-[#EE6474] border-l-[#EE6474] border-t-[#DEBCF9]"
                }`}
            ></div>
            <div className='flex flex-col text-center'>
                <p className='text-xl font-semibold'>{data}</p>
                <p className='text-sm md:text-lg font-semibold'>{`Total ${name}`}</p>
            </div>
        </div>
    );
}
