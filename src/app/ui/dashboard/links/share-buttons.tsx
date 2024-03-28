import Image from "next/image";
import linkedinIcon from "@icons/linkedin.svg";
import twitterIcon from "@icons/twitter.svg";
import slackIcon from "@icons/slack.svg";
import shareIcon from "@icons/share.svg";
import { shareLink } from "@utilities/utils";
export default function ShareButtons({
    formattedLink,
}: {
    formattedLink: string;
}) {
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
            <button
                className='hover:scale-125 transitionEase'
                onClick={() => shareLink(formattedLink)}
            >
                <Image src={shareIcon} alt='LinkedIn' />
            </button>
        </div>
    );
}
