"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavlinkProps = {
    name: string;
    path: string;
    id: number;
};

export default function Navlink({ name, path, id }: NavlinkProps) {
    const pathname = usePathname();
    return (
        <>
            <Link
                href={path}
                className={`${
                    pathname === path ? "text-purple" : "text-zinc-50"
                }  hover:text-purple transitionEase text-lg`}
            >
                {name}
            </Link>
        </>
    );
}
