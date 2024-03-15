"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navlink({
    href,
    icon,
    name,
    activeIcon,
}: {
    href: string;
    icon: string;
    name: string;
    activeIcon: string;
}) {
    const pathname = usePathname();

    return (
        <Link href={href} className=''>
            <div className='flex gap-4 items-center'>
                {pathname === href ? (
                    <Image src={activeIcon} alt='' />
                ) : (
                    <Image src={icon} alt='' />
                )}
                <span
                    className={`font text-lg hover:text-purple transitionEase ${
                        pathname === href
                            ? "text-purple border-b-[3px] border-b-purple"
                            : "text-zinc-50"
                    }`}
                >
                    {name}
                </span>
            </div>
        </Link>
    );
}
