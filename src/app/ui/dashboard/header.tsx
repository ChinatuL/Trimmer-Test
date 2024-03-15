"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import settingsIcon from "@icons/settings.svg";
import notificationIcon from "@icons/notifications.svg";
import ProfileButton from "@dashboard/profile-button";

export default function DashboardHeader() {
    const pathname = usePathname();
    function getHeadingFromPath() {
        let heading = "Overview";
        if (pathname !== "/dashboard") {
            const pathArray = pathname.split("/");
            heading =
                pathArray[2].charAt(0).toUpperCase() + pathArray[2].slice(1);
        }
        return heading;
    }
    const headingText = getHeadingFromPath();

    return (
        <div className='flex justify-between items-center w-full text-zinc-50 py-4 px-6 bg-gradient-to-r from-darkBlue from-35% to-darkPurple to-100%'>
            <h1 className='text-3xl'>{headingText}</h1>
            <div className='flex gap-16'>
                <div className='flex gap-4 items-center'>
                    <button className='hover:scale-125 transitionEase'>
                        <Image src={settingsIcon} alt='Settings' />
                    </button>
                    <button className='hover:scale-125 transitionEase'>
                        <Image src={notificationIcon} alt='Notifications' />
                    </button>
                </div>
                <ProfileButton />
            </div>
        </div>
    );
}
