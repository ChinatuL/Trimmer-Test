import QRCodeComponent from "@ui/qr-code";
import Image from "next/image";
import closeIcon from "@icons/close.svg";
import copyIcon from "@icons/copy.svg";
import ShareButtons from "./share-buttons";
import { Link } from "@lib/definitions";
import {
    baseUrl,
    copyLinkToClipboard,
    formatLink,
    enableScroll,
} from "@lib/utilities/utils";

type LinkDetailsProps = {
    setShowLink: (showLink: boolean) => void;
    linkDetails: Link | null;
};
export default function LinkDetails({
    setShowLink,
    linkDetails,
}: LinkDetailsProps) {
    if (!linkDetails) return null;

    const formattedLink = formatLink(linkDetails.shortLink);

    function handleCopy() {
        copyLinkToClipboard(formattedLink);
    }

    function closeLinkDetails() {
        setShowLink(false);
        enableScroll();
    }

    return (
        <div className='flex flex-col gap-4 w-[90vw] md:w-[35rem]  bg-zinc-50 text-[#131033] rounded-xl p-8'>
            <div className='flex justify-between items-center w-full'>
                <h2 className='font-semibold text-xl'>Short Link Info</h2>
                <button onClick={closeLinkDetails}>
                    <Image src={closeIcon} alt='Close link details' />
                </button>
            </div>
            <div className='flex flex-col md:flex-row gap-8'>
                <div className='flex flex-col order-1 md:order-none gap-6'>
                    <QRCodeComponent
                        value={`${baseUrl}as/${linkDetails.shortLink}`}
                        size={100}
                    />
                    <button className='w-max md:w-auto border border-purple text-purple rounded-lg px-3 py-1 transitionEase hover:bg-purple hover:text-zinc-50 hover:border-none'>
                        Download
                    </button>
                </div>
                <div className='flex flex-col gap-2'>
                    <h3 className='font-semibold'>Short Link</h3>
                    <div className='flex justify-between items-center w-72 border border-[#9C98CB] rounded-lg p-2'>
                        <p className='text-sm text-darkBlue'>{formattedLink}</p>
                        <button
                            onClick={handleCopy}
                            className='hover:scale-125 transitionEase'
                        >
                            <Image src={copyIcon} alt='copy url' />
                        </button>
                    </div>
                    <p className='font-semibold'>Share via:</p>
                    <ShareButtons />
                </div>
            </div>
            <button
                onClick={() => setShowLink(false)}
                className='self-end bg-purple border border-purple text-zinc-50 px-4 py-1 rounded-lg transitionEase hover:bg-transparent hover:text-purple'
            >
                Done
            </button>
        </div>
    );
}
