import SectionTitle from "@ui/section-title";
import { pricingPlans } from "@lib/data";
import PricingCard from "./pricing-card";

export default function Pricing() {
    return (
        <section
            className='flex justify-center items-center min-h-[100vh] bg-pricing-bg bg-no-repeat bg-cover text-zinc-50 py-8'
            id='pricing'
        >
            <div className='w-[85vw] lg:w-[90vw] max-w-[1000px]'>
                <SectionTitle
                    firstTitle='Experience transparent pricing'
                    description="Whether you're a solo content creator, a growing startup, or a large enterprise, we have the perfect plan for you."
                />
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 w-full mx-auto py-8'>
                    {pricingPlans.map((plan) => {
                        return <PricingCard key={plan.id} {...plan} />;
                    })}
                </div>
            </div>
        </section>
    );
}
