import Image from "next/image";
import bigLink from "@images/big-link.png";
import bigScissor from "@images/big-scissor.png";
import LinkShortenerForm from "./link-shortener-form";
export default function HomeComponent({
    handleSubmit,
}: {
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
}) {
    return (
        <div className='flex justify-center items-center px-8 md:px-16 lg:px-24 h-[calc(100vh-3.5rem)] bg-gradient-to-r from-darkBlue from-35% to-darkPurple to-100%'>
            <Image src={bigLink} alt='' className='absolute top-16 left-4' />
            <Image src={bigLink} alt='' className='absolute bottom-0 right-4' />
            <div className='relative flex items-center w-full max-w-[1300px]'>
                <div className='lg:w-[65%] text-zinc-50 '>
                    <h1 className='text-3xl font-bold leading-10 md:text-4xl lg:w-full lg:text-5xl lg:leading-[60px]'>
                        Unleash the power of short links with our advanced{" "}
                        <span className='text-purple'>URL shortening</span>{" "}
                        solution.
                    </h1>
                    <p className='pt-4 leading-8 md:text-xl md:leading-10 lg:text-xl lg:w-[50ch]'>
                        Make your links more manageable, trackable, and
                        shareable with our advanced URL shortening service.
                    </p>
                    <LinkShortenerForm handleSubmit={handleSubmit} />
                </div>
                <div className='hidden lg:w-[35%] lg:h-full lg:grid lg:place-items-center'>
                    <Image src={bigScissor} alt='' className='object-contain' />
                </div>
            </div>
        </div>
    );
}
