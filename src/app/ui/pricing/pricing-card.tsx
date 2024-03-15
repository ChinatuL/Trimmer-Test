type PricingCardProps = {
    title: string;
    price: string;
    description: string;
    features: string[];
};

export default function PricingCard({
    title,
    price,
    description,
    features,
}: PricingCardProps) {
    return (
        <div
            className={`flex flex-col bg-darkBlue py-10 pl-12 pr-8 ${
                title === "Professional"
                    ? "border-4 border-purple"
                    : "border-b-4 border-b-[#5059C9]"
            } rounded-xl`}
        >
            <h3 className='text-2xl font-bold pb-4'>{title}</h3>
            <p className='text-4xl font-bold pb-2'>{price}</p>
            <p className='text-lg pb-2'>{description}</p>
            <ul className='flex flex-col gap-4'>
                {features.map((feature, index) => {
                    return (
                        <li
                            key={index}
                            className={`${
                                title === "Professional"
                                    ? "list-image-[url(/icons/list-marker-white.svg)]"
                                    : "list-image-[url(/icons/list-marker-purple.svg)]"
                            } ml-5`}
                        >
                            {feature}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
