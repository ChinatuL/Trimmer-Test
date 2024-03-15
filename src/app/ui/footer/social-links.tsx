import Link from "next/link";
import Image from "next/image";
import { socialLinks } from "@/app/lib/data";
export default function SocialLinks() {
    return (
        <div className='flex gap-4 items-center'>
            {socialLinks.map((link) => {
                const { id, icon, href, name } = link;
                return (
                    <Link
                        key={id}
                        href={href}
                        className='hover:scale-125 transitionEase'
                    >
                        <Image src={icon} alt={name} />
                    </Link>
                );
            })}
        </div>
    );
}
