import Image from "next/image";
import linkedinIcon from "@icons/linkedin.svg";
import twitterIcon from "@icons/twitter.svg";
import slackIcon from "@icons/slack.svg";
import ellipsisIcon from "@icons/ellipsis-horizontal.svg";
export default function ShareButtons() {
    return (
        <div className='flex gap-2 items-center'>
            <button className='hover:scale-125 transitionEase'>
                <Image src={linkedinIcon} alt='LinkedIn' />
            </button>
            <button className='hover:scale-125 transitionEase'>
                <Image src={twitterIcon} alt='LinkedIn' />
            </button>
            <button className='hover:scale-125 transitionEase'>
                <Image src={slackIcon} alt='LinkedIn' />
            </button>
            <button className='hover:scale-125 transitionEase'>
                <Image src={ellipsisIcon} alt='LinkedIn' />
            </button>
        </div>
    );
}
