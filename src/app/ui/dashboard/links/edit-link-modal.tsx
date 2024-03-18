import { baseUrl, enableScroll } from "@lib/utilities/utils";
import Image from "next/image";
import closeIcon from "@icons/close.svg";
import { Dispatch, SetStateAction } from "react";

type EditLinkModalProps = {
    setIsEditing: Dispatch<SetStateAction<boolean>>;
    editLink: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
    error: string;
};

export default function EditLinkModal({
    setIsEditing,
    editLink,
    error,
}: EditLinkModalProps) {
    function closeEditModal() {
        setIsEditing(false);
        enableScroll();
    }

    return (
        <div className='flex flex-col gap-4 w-[90vw] md:w-[35rem] bg-zinc-50 text-[#131033] rounded-xl p-8'>
            <div className='flex justify-between items-center w-full'>
                <h2 className='font-semibold text-xl'>Edit Link</h2>
                <button onClick={closeEditModal}>
                    <Image src={closeIcon} alt='Close link details' />
                </button>
            </div>
            <form className='flex flex-col gap-4 w-full' onSubmit={editLink}>
                <div className='flex flex-col md:flex-row gap-4 w-full'>
                    <div className='flex flex-col'>
                        <label htmlFor='domain'>Domain:</label>
                        <input
                            type='text'
                            value={`${baseUrl}as/`}
                            name='domain'
                            className='border border-[#9C98CB] rounded-lg p-2 text-sm text-darkBlue'
                            disabled
                        />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor='domain'>Custom Name:</label>
                        <input
                            type='text'
                            placeholder='enter link name'
                            name='custom-name'
                            className={`border  rounded-lg p-2 text-sm text-darkBlue focus:border-2 focus:border-purple focus:outline-none ${
                                error ? "border-red-700" : "border-[#9C98CB]"
                            }`}
                        />
                        <p className=' text-sm text-red-700'>{error}</p>
                    </div>
                </div>
                <button
                    type='submit'
                    className='self-end border border-purple text-purple rounded-lg px-3 py-1 transitionEase hover:bg-purple hover:text-zinc-50 hover:border-none w-16'
                >
                    Edit
                </button>
            </form>
        </div>
    );
}
