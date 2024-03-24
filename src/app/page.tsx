import Header from "@ui/header/header";
import HomeComponent from "@ui/home/home";
import Features from "@ui/features/features";
import Pricing from "@ui/pricing/pricing";
import Reviews from "@ui/reviews/reviews";
import CallToAction from "@ui/call-to-action";
import Footer from "@ui/footer/footer";

export default function Home() {
    return (
        <div className='w-full'>
            <Header />
            <main>
                <HomeComponent />
                <Features />
                <Pricing />
                <Reviews />
                <CallToAction />
            </main>
            <Footer />
        </div>
    );
}
