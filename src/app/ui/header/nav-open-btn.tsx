import Image from "next/image";
import harmburgerIcon from "@icons/harmburger.svg";

export default function NavOpenBtn({ openNav }: { openNav: () => void }) {
    return (
        <button className='lg:hidden' onClick={openNav}>
            <Image src={harmburgerIcon} alt='open navbar' />
        </button>
    );
}
