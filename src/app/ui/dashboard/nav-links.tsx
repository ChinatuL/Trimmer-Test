import Navlink from "./nav-link";
import { sidenavLinks as links } from "@/app/lib/data";

export default function NavLinks() {
    return (
        <div className='flex w-full justify-between lg:justify-normal lg:flex-col lg:gap-6'>
            {links.map((link) => {
                return <Navlink key={link.id} {...link} />;
            })}
        </div>
    );
}
