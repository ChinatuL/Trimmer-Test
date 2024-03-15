import QRCodeComponent from "@ui/qr-code";
import { baseUrl } from "@lib/utilities/utils";
import ActionButtons from "./action-buttons";


export default function LinkComponent({
    id,
    shortLink,
    timestamp,
    views,
    handleLinkDetails,
}: {
    id: number;
    shortLink: string;
    timestamp: string;
    views: { date: string; location: string }[];
    handleLinkDetails: (id: number) => void;
}) {
    const formattedDate = new Date(timestamp).toLocaleString().split(",")[0];
    return (
        <div
            className='w-full px-4 cursor-pointer'
            onClick={() => handleLinkDetails(id)}
        >
            <div className='flex flex-col gap-2 items-center border-b-2 border-b-[#262165] px-4 pt-4 pb-1'>
                <div className='grid grid-cols-5 items-center  w-full'>
                    <div className=''>
                        <p
                            className='truncate justify-self-start'
                            id={shortLink}
                        >
                            {`${baseUrl}as/${shortLink}`}
                        </p>
                    </div>
                    <div className='justify-self-center'>
                        <QRCodeComponent
                            value={`${baseUrl}as/${shortLink}`}
                            size={70}
                        />
                    </div>
                    <div className='justify-self-center'>
                        <div className='flex gap-2'>
                            <p>Created:</p>
                            <p>{formattedDate}</p>
                        </div>
                        <div className='flex gap-2'>
                            <p>Clicks:</p>
                            <p>{views.length}</p>
                        </div>
                    </div>
                    <div className='justify-self-center'>
                        <p>Last Location:</p>
                        <p>{views[views.length - 1].location}</p>
                    </div>
                    <ActionButtons />
                </div>
            </div>
        </div>
    );
}
