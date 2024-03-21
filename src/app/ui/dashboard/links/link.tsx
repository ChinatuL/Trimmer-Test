"use client";
import QRCodeComponent from "@ui/qr-code";
import { baseUrl } from "@lib/utilities/utils";
import Image from "next/image";
import eyeIcon from "@icons/eye-purple.svg";
import editIcon from "@icons/edit.svg";
import trashIcon from "@icons/trash.svg";
import linkIcon from "@icons/link-purple.svg";
import clockIcon from "@icons/clock.svg";
import locationIcon from "@icons/location.svg";
import clicksIcon from "@icons/clicks.svg";

type LinkComponentProps = {
    id: string;
    longLink: string;
    shortLink: string;
    timestamp: string;
    views: { date: string; location: string }[];
    handleLinkDetails: (id: string) => void;
    openEditModal: (id: string) => void;
    openDeleteModal: (id: string) => void;
};

export default function LinkComponent({
    id,
    longLink,
    shortLink,
    timestamp,
    views,
    handleLinkDetails,
    openEditModal,
    openDeleteModal,
}: LinkComponentProps) {
    const formattedDate = new Date(timestamp).toLocaleString().split(",")[0];
    return (
        <div className='w-full px-4'>
            <div className='flex flex-col gap-2 items-center border-b border-b-purple rounded-xl px-4 pt-4 pb-1'>
                <div className='flex flex-col gap-2 lg:grid lg:grid-cols-4 lg:items-center lg:gap-0 w-full'>
                    <div className='flex gap-2'>
                        <Image src={linkIcon} alt='Shortened Link' />
                        <p
                            className='truncate justify-self-start'
                            id={shortLink}
                        >
                            {`${baseUrl}as/${shortLink}`}
                        </p>
                    </div>
                    <div className='justify-self-center flex flex-col gap-2'>
                        <div className='flex gap-2'>
                            <Image src={clockIcon} alt='Created at' />
                            <p>{formattedDate}</p>
                        </div>
                        <div className='flex gap-2'>
                            <Image src={clicksIcon} alt='Clicks' />
                            <p>{views.length}</p>
                        </div>
                    </div>
                    <div className='flex gap-2 justify-self-center'>
                        <Image src={locationIcon} alt='Last Location' />
                        <p>
                            {!views.length
                                ? "none"
                                : views[views.length - 1].location}
                        </p>
                    </div>
                    <div className='flex gap-3 justify-end  lg:justify-center items-center w-full'>
                        <button
                            className='hover:scale-125 transitionEase'
                            onClick={() => handleLinkDetails(id)}
                        >
                            <Image src={eyeIcon} alt='view link' />
                        </button>
                        <button
                            className='hover:scale-125 transitionEase'
                            onClick={() => openEditModal(id)}
                        >
                            <Image src={editIcon} alt='view link' />
                        </button>
                        <button
                            className='hover:scale-125 transitionEase'
                            onClick={() => openDeleteModal(id)}
                        >
                            <Image src={trashIcon} alt='view link' />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
