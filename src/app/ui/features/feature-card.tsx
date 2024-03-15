import Image from "next/image";
type FeatureCardProps = {
    icon: string;
    title: string;
    description: string;
};

export default function FeatureCard({
    icon,
    title,
    description,
}: FeatureCardProps) {
    return (
        <div className='flex flex-col gap-2 items-center text-center'>
            <Image src={icon} alt='' className='pb-4' />
            <h3 className='text-xl font-semibold'>{title}</h3>
            <p className='leading-6 w-full md:w-[40ch] lg:w-[32ch]'>
                {description}
            </p>
        </div>
    );
}
