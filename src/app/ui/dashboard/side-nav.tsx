"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { signOut } from "firebase/auth";
import { auth } from "@firebase/firebase-config";
import { saveUserToLocalStorage, baseUrl } from "@utilities/utils";
import TrimmerLogo from "@ui/trimmer-logo";
import NavLinks from "@dashboard/nav-links";

export default function SideNav() {
    const router = useRouter();

    async function logout() {
        await signOut(auth);
        const response = await fetch(`${baseUrl}/api/logout`, {
            method: "POST",
        });
        if (response.status === 200) {
            saveUserToLocalStorage(null);
            router.push("/");
        }
    }

    return (
        <div className='fixed bottom-0 z-20 w-full border-t pb-4 border-t-purple lg:w-auto lg:relative lg:h-full lg:border-r-2 lg:border-r-purple lg:rounded-xl lg:border-t-0 px-8 pt-4 lg:pb-0 bg-darkBlue lg:bg-gradient-to-b from-darkBlue from-40% to-darkPurple to-100%'>
            <nav className='flex flex-col gap-8'>
                <div className='hidden lg:block'>
                    <Link href='/'>
                        <TrimmerLogo />
                    </Link>
                </div>
                <div className='flex lg:flex-col lg:gap-6'>
                    <NavLinks />
                    <button
                        onClick={logout}
                        className='hidden lg:flex flex-col lg:flex-row lg:gap-4 items-center text-lg text-zinc-50 hover:text-purple transitionEase'
                    >
                        <svg
                            className='stroke-zinc-50 hover:stroke-purple'
                            width='32'
                            height='32'
                            viewBox='0 0 32 32'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <path
                                d='M7.51472 7.51472C2.82843 12.201 2.82843 19.799 7.51472 24.4853C12.201 29.1716 19.799 29.1716 24.4853 24.4853C29.1716 19.799 29.1716 12.201 24.4853 7.51472M16 4V16'
                                strokeWidth='1.5'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                            />
                        </svg>
                        <span className='hidden lg:block'>Logout</span>
                    </button>
                </div>
            </nav>
        </div>
    );
}
