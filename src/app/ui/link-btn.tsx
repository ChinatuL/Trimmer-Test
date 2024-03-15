import Link from "next/link";

type LinkBtnProps = {
    href: string;
    text: string;
};

export default function LinkBtn({ href, text }: LinkBtnProps) {
    return (
        <Link href={href} className="hover:opacity-80 transitionEase">
            <div className='w-28 py-2 bg-purple rounded-md grid place-items-center'>
                {text}
            </div>
        </Link>
    );
}
