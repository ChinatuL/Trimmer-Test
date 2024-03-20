import { QRCodeSVG } from "qrcode.react";
import { baseUrl, formatDay } from "@lib/utilities/utils";
import Image from "next/image";
import calendarIcon from "@icons/calendar.svg";
import linkIcon from "@icons/link.svg";
import { format } from "path";
export default function QrCodeComponent() {
    function getCurrentDate() {
        const today = new Date();
        const year = today.getFullYear();
        const monthName = today.toLocaleString("default", { month: "long" });
        const day = formatDay(today.getDate());

        return `${day} ${monthName}, ${year}`;
    }

    const date = getCurrentDate();

    return (
        <section className='flex flex-col justify-center items-center gap-4 text-center w-full bg-analyticsBg rounded-xl py-6 px-4'>
            <h2 className='text-lg font-semibold'>Scan QR code</h2>
            <div>
                <QRCodeSVG value={baseUrl} />
            </div>
            <div className='flex gap-2 items-center'>
                <Image src={calendarIcon} alt='' />
                <p>{date}</p>
            </div>
            <div className='flex gap-2 items-center'>
                <Image src={linkIcon} alt='' />
                <p>{baseUrl}</p>
            </div>
        </section>
    );
}
