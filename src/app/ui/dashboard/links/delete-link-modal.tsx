import Image from "next/image";
import closeIcon from "@icons/close.svg";
import { Dispatch, SetStateAction } from "react";

export default function DeleteLinkModal({
    setIsDeleting,
}: {
    setIsDeleting: Dispatch<SetStateAction<boolean>>;
}) {
    return (
        <div className='flex flex-col gap-4 w-[35rem]  bg-zinc-50 text-[#131033] rounded-xl p-8'>
            <div className='flex justify-between items-center w-full'>
                <h2 className='font-semibold text-xl'>Delete Link</h2>
                <button onClick={() => setIsDeleting(false)}>
                    <Image src={closeIcon} alt='Close link details' />
                </button>
            </div>
            <p className='text-lg'>
                Are you sure you want to delete this link?
            </p>
            <button className='self-end border border-red-700 text-zinc-50 bg-red-700 rounded-lg px-3 py-1 transitionEase hover:bg-transparent hover:text-red-700 w-20'>
                Delete
            </button>
        </div>
    );
}
