"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReviewCard from "./review-card";
import { reviews } from "@lib/data";

export default function ReviewsCarousel() {
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        customPaging: function (i: number) {
            return <div className={`h-2 w-2 rounded-full bg-[#262165]`}></div>;
        },
    };

    return (
        <div className=' lg:hidden mx-auto pt-8'>
            <Slider {...settings}>
                {reviews.map((review) => {
                    return <ReviewCard key={review.id} {...review} />;
                })}
            </Slider>
        </div>
    );
}
