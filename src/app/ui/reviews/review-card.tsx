import Image, { StaticImageData } from "next/image";
import Rating from "./rating";

type ReviewCardProp = {
    rating: number;
    text: string;
    img: StaticImageData;
    name: string;
    position: string;
};
export default function ReviewCard({
    rating,
    text,
    img,
    name,
    position,
}: ReviewCardProp) {
    return (
        <div className='bg-[#131033] p-6'>
            <Rating rating={rating} />
            <p className='pt-4 leading-6'>{text}</p>
            <div className='flex items-center gap-4 pt-6'>
                <div>
                    <Image src={img} alt={name} />
                </div>
                <div>
                    <p className='text-lg'>{name}</p>
                    <p className='text-xs'>{position}</p>
                </div>
            </div>
        </div>
    );
}
