"use client"
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import {
    baseUrl,
    saveUserToLocalStorage,
    getHeadingFromPath,
} from "@utilities/utils";
import { auth } from "@firebase/firebase-config";
import { signOut } from "firebase/auth";
import settingsIcon from "@icons/settings.svg";
import notificationIcon from "@icons/notifications.svg";
import ProfileButton from "@dashboard/profile-button";

export default function DashboardHeader() {
    const pathname = usePathname();
    const router = useRouter();
    const headingText = getHeadingFromPath(pathname);

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
        <div className='flex justify-between items-center w-full text-zinc-50 py-4 px-4 bg-gradient-to-r from-darkBlue from-35% to-darkPurple to-100%'>
            <h1 className='text-lg lg:text-2xl'>{headingText}</h1>
            <div className='flex gap-16'>
                <div className='hidden lg:flex gap-4 items-center'>
                    <button className='hover:scale-125 transitionEase'>
                        <Image src={settingsIcon} alt='Settings' />
                    </button>
                    <button className='hover:scale-125 transitionEase'>
                        <Image src={notificationIcon} alt='Notifications' />
                    </button>
                </div>
                <div className='flex gap-2'>
                    <ProfileButton />
                    <button
                        onClick={logout}
                        className='text-lg text-zinc-50 hover:text-purple transitionEase lg:hidden'
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
                    </button>
                </div>
            </div>
        </div>
    );
}
