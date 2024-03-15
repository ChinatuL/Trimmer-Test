import Image from "next/image";
import { generateRating } from "@lib/utilities/utils";
import star from "@icons/star.svg";
export default function Rating({ rating }: { rating: number }) {
    const ratingArr = generateRating(rating);
    return (
        <div className='flex gap-1'>
            <p className='sr-only'>
                Rated {rating} {rating > 1 ? "stars" : "star"}{" "}
            </p>
            {ratingArr.map((_, i) => {
                return <Image key={i} src={star} alt='' />;
            })}
        </div>
    );
}
