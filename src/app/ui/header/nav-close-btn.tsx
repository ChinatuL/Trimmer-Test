import Image from "next/image";
import closeIcon from "@icons/close-white.svg";
export default function NavCloseBtn({ closeNav }: { closeNav: () => void }) {
    return (
        <button className='lg:hidden self-end' onClick={closeNav}>
            <Image src={closeIcon} alt='close navbar' />
        </button>
    );
}
