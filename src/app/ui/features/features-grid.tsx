import Image from "next/image";
import FeatureCard from "./feature-card";
import analytics from "@icons/features-analytics.svg";
import customUrls from "@icons/features-custom-url.svg";
import qrcodes from "@icons/features-qrcode.svg";
import urlShortening from "@icons/features-url-shortening.svg";
import smallScissor from "@images/small-scissor.png";
export default function FeaturesGrid() {
    return (
        <div className='relative grid lg:grid-cols-2 gap-8 mt-8 pb-8 w-full mx-auto'>
            <Image
                src={smallScissor}
                alt=''
                className='hidden lg:absolute lg:top-[45%] lg:left-[48%]'
            />
            <div className='py-4 border-b-4 border-b-purple lg:[border-width:2px_0px_2px_2px] lg:[border-color:#9D37ED] rounded-xl'>
                <FeatureCard
                    icon={urlShortening}
                    title='URL Shortening'
                    description='Shorten long URLs in just a few clicks to make them more shareable and appealing. Our platform ensures your links look clean and trustworthy, enhancing user engagement.'
                />
            </div>
            <div className='py-4 border-b-4 border-b-purple lg:[border-width:2px_2px_2px_0px] lg:[border-color:#9D37ED] rounded-xl'>
                <FeatureCard
                    icon={customUrls}
                    title='Custom URLs'
                    description='Tailor your URLs to match your brand or message. Custom slugs make your links memorable and promote brand consistency across your digital content.'
                />
            </div>
            <div className='py-4 border-b-4 border-b-purple lg:[border-width:2px_0px_2px_2px] lg:[border-color:#9D37ED] rounded-xl'>
                <FeatureCard
                    icon={qrcodes}
                    title='QR Codes'
                    description='Turn any URL into a QR code for easy sharing on flyers, posters, or social media. A seamless way to connect offline audiences to your online content.'
                />
            </div>
            <div className='py-4 border-b-4 border-b-purple lg:[border-width:2px_2px_2px_0px] lg:[border-color:#9D37ED] rounded-xl'>
                <FeatureCard
                    icon={analytics}
                    title='Data Analytics'
                    description="Gain valuable insights into your link's performance. Track clicks, geographic locations, devices, and more to understand your audience better and refine your strategies."
                />
            </div>
        </div>
    );
}
