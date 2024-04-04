import Image from "next/image";
import editIcon from "@icons/edit-profile.svg";
export default function EditBtn({ section }: { section: string }) {
    return (
        <Image src={editIcon} alt={`edit ${section}`} width={20} height={20} />
    );
}
