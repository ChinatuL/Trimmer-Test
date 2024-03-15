import Image from "next/image";
import logo from "@icons/logo-white.svg";
import SocialLinks from "./social-links";
import FooterLinks from "./footer-links";
export default function Footer() {
    return (
        <footer className='flex justify-center items-center bg-darkBlue  text-zinc-50 py-8 bg-[url("/images/bg-footer.png")] bg-no-repeat bg-left-bottom px-8'>
            <div className='w-full max-w-[1000px] mx-auto flex flex-col gap-8 lg:flex-row lg:justify-between'>
                <div className='flex flex-col gap-4 w-[30%]'>
                    <div>
                        <Image src={logo} alt='Trimmer logo' />
                    </div>
                    <SocialLinks />
                </div>
                <FooterLinks />
            </div>
        </footer>
    );
}
