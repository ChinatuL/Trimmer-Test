"use client";
import QRCodeComponent from "@ui/qr-code";
import { baseUrl } from "@lib/utilities/utils";
import Image from "next/image";
import eyeIcon from "@icons/eye.svg";
import editIcon from "@icons/edit.svg";
import trashIcon from "@icons/trash.svg";

type LinkComponentProps = {
    id: string;
    shortLink: string;
    timestamp: string;
    views: { date: string; location: string }[];
    handleLinkDetails: (id: string) => void;
    openEditModal: (id: string) => void;
    openDeleteModal: (id: string) => void;
};

export default function LinkComponent({
    id,
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
                        <p>
                            {!views.length
                                ? "none"
                                : views[views.length - 1].location}
                        </p>
                    </div>
                    <div className='flex gap-3 justify-center items-center w-full'>
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
