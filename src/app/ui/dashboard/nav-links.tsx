import Navlink from "./nav-link";
import { sidenavLinks as links } from "@/app/lib/data";

export default function NavLinks() {
    return (
        <div className='flex flex-col gap-6'>
            {links.map((link) => {
                return <Navlink key={link.id} {...link} />;
            })}
        </div>
    );
}
