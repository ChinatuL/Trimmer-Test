import Image from "next/image";
import logo from "@icons/logo.svg";
export default function TrimmerLogo() {
    return (
        <div>
            <Image src={logo} alt='Trimmer logo' priority />
        </div>
    );
}
