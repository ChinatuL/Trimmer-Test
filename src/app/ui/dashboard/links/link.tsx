import QRCodeComponent from "@ui/qr-code";

export default function LinkComponent({
    id,
    longUrl,
    shortUrl,
    date,
    clicks,
    handleLinkDetails,
}: {
    id: number;
    longUrl: string;
    shortUrl: string;
    date: string;
    clicks: number;
    handleLinkDetails: (id: number) => void;
}) {
    return (
        <div
            className='w-full px-4 cursor-pointer'
            onClick={() => handleLinkDetails(id)}
        >
            <div className='grid grid-cols-[30%_25%_1fr_1fr_1fr] justify-center content-center items-center gap-4 border-b-2 border-b-[#262165] px-4 pt-4 pb-1'>
                <div>
                    <p className='truncate justify-self-start' id={longUrl}>
                        {longUrl}
                    </p>
                </div>
                <div>
                    <p id={shortUrl}>{shortUrl}</p>
                </div>
                <div className='justify-self-center'>
                    <QRCodeComponent value={shortUrl} size={50} />
                </div>
                <div className='justify-self-center'>
                    <p>{date}</p>
                </div>
                <div className='justify-self-center'>
                    <p>{clicks}</p>
                </div>
            </div>
        </div>
    );
}
