import SectionTitle from "@ui/section-title";
import ReviewCard from "./review-card";
import { reviews } from "@lib/data";
export default function Reviews() {
    return (
        <section
            className="flex justify-center items-center min-h-[100vh] bg-darkBlue text-zinc-50 [background-image:url('/images/bg-reviews-top.png'),url('/images/bg-reviews-bottom.png')] bg-no-repeat [background-position:top_left,bottom_left] py-8"
            id='faq'
        >
            <div className='w-[85vw] lg:w-[90vw] max-w-[1000px]'>
                <SectionTitle
                    firstTitle='What Our'
                    highlight='Clients'
                    secondTitle='Say'
                />
                <div className='grid lg:grid-cols-3 gap-4  mx-auto pt-8'>
                    {reviews.map((review) => {
                        return <ReviewCard key={review.id} {...review} />;
                    })}
                </div>
            </div>
        </section>
    );
}
