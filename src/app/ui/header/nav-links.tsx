import Navlink from "./nav-link";
import { navbarLinks as links } from "@lib/data";

export default function Navlinks() {
    return (
        <>
            {links.map((link) => {
                return (
                        <Navlink key={link.id} {...link} />
                    
                );
            })}
        </>
    );
}
