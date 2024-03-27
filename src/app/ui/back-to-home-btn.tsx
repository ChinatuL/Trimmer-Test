import Image from "next/image";
import Link from "next/link";
import leftArrowIcon from "@icons/arrow-left.svg";
export default function BackToHomeButton() {
    return (
        <div className='absolute top-2 left-2 '>
            <Link
                href='/'
                className='flex gap-2 items-center px-4 py-2 rounded-md bg-purple text-zinc-50 z-30 transitionEase hover:opacity-75'
            >
                <Image src={leftArrowIcon} alt='' />
                <span className='hidden lg:block'>Back Home</span>
            </Link>
        </div>
    );
}
