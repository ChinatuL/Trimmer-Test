import Image from "next/image";
import { QRCodeSVG } from "qrcode.react";
import { baseUrl, formatDay } from "@utilities/utils";
import calendarIcon from "@icons/calendar.svg";
import linkIcon from "@icons/link.svg";

export default function QrCodeComponent() {
    function getCurrentDate() {
        const currentDate = new Date();
        const year = currentDate.getFullYear();
        const monthName = currentDate.toLocaleString("default", { month: "long" });
        const day = formatDay(currentDate.getDate());
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
