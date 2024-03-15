import Image from "next/image";
import { actionButtons } from "@lib/data";

export default function ActionButtons() {
    return (
        <div className='flex gap-3 justify-center items-center w-full'>
            {actionButtons.map((button) => {
                const { id, img, name } = button;
                return (
                    <button
                        key={id}
                        aria-label={name}
                        className='hover:scale-125 transitionEase'
                    >
                        <Image src={img} alt='' />
                    </button>
                );
            })}
        </div>
    );
}
