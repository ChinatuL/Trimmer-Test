import SectionTitle from "@ui/section-title";
import FeaturesGrid from "./features-grid";

export default function Features() {
    return (
        <section
            className='flex justify-center items-center relative min-h-[100vh] bg-darkBlue text-zinc-50 [background-image:url("/images/bg-features-left.png"),url("/images/bg-features-right.png")] bg-no-repeat [background-position:top_left,top_right] pt-8'
            id='features'
        >
            <div className='w-[85vw] lg:w-[70vw] max-w-[1000px]'>
                <SectionTitle
                    firstTitle='Why'
                    highlight='Choose'
                    secondTitle='Us'
                    description='Shorten it. Customize it. Track it. Trimmer does it all.'
                />
                <FeaturesGrid />
            </div>
        </section>
    );
}
