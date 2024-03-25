import Image from "next/image";
import smallLink from "@images/small-link.png";
import smallScissor from "@images/small-scissor.png";
import { Dispatch, SetStateAction } from "react";

type LinkShortenerFormProps = {
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
    error: string;
    value: string;
    setLink: Dispatch<SetStateAction<string>>;
};

export default function LinkShortenerForm({
    handleSubmit,
    error,
    value,
    setLink,
}: LinkShortenerFormProps) {
    return (
        <form
            onSubmit={handleSubmit}
            className='relative mt-8 py-6 w-full border border-darkBlue shadow-[-6px_6px_0_0_#9D37ED,_3px_-3px_0_0_#0d0c23] rounded-[20px]'
        >
            <Image
                src={smallLink}
                alt=''
                width={34}
                height={34}
                className='absolute top-7 left-0 md:left-4'
            />
            <Image
                src={smallScissor}
                alt=''
                width={50}
                height={50}
                className='absolute top-6 -right-2 md:right-4'
            />
            <div className='flex flex-col md:flex-row gap-2 lg:gap-4 items-center justify-center'>
                <label htmlFor='link' className='sr-only'>
                    Enter a link to shorten
                </label>
                <div className='w-[80%] md:w-96 lg:w-72'>
                    <input
                        name='link'
                        type='text'
                        id='link'
                        value={value}
                        onChange={(e) => setLink(e.target.value)}
                        placeholder='Enter Your Link Here'
                        className='bg-darkBlue border border-zinc-50 py-3 px-4 placeholder:text-center rounded-lg w-full'
                    />
                    {error && <p className='text-sm text-red-700'>{error}</p>}
                </div>
                <button
                    type='submit'
                    className='w-[80%] md:w-32 py-3 border border-purple bg-purple rounded-md transitionEase hover:opacity-70'
                >
                    Shorten Link
                </button>
            </div>
        </form>
    );
}
