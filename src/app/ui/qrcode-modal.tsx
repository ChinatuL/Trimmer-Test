import Image from "next/image";
import { QRCodeSVG } from "qrcode.react";
import closeIcon from "@icons/close.svg";
import { Dispatch, SetStateAction } from "react";
import { enableScroll } from "@lib/utilities/utils";

type QrCodeModalProps = {
    shortLink: string;
    setOpenQrCode: Dispatch<SetStateAction<boolean>>;
};

export default function QrCodeModal({
    shortLink,
    setOpenQrCode,
}: QrCodeModalProps) {

    function closeQrCodeModal() {
        setOpenQrCode(false);
        enableScroll();
    }
    return (
        <div className='flex flex-col'>
            <button
                className='absolute top-8 right-8'
                onClick={closeQrCodeModal}
            >
                <Image src={closeIcon} alt='close svg modal' />
            </button>
            <div className='flex justify-center items-center w-full h-full'>
                <QRCodeSVG value={shortLink} />
            </div>
        </div>
    );
}
