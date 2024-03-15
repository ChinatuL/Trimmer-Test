type SectionTitleProps = {
    firstTitle: string;
    highlight?: string;
    secondTitle?: string;
    description?: string;
};

export default function SectionTitle({
    firstTitle,
    highlight,
    secondTitle,
    description,
}: SectionTitleProps) {
    return (
        <div className='flex flex-col items-center text-center gap-1 font-semibold'>
            <h2 className='text-2xl md:text-3xl leading-10'>
                {firstTitle}{" "}
                {highlight ? (
                    <span className='text-purple'>{highlight}</span>
                ) : (
                    ""
                )}{" "}
                {secondTitle}
            </h2>
            <p className='md:text-lg max-w-[70ch]'>{description}</p>
        </div>
    );
}
