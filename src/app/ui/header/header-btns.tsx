"use client";

import { useUser } from "@context/user-context";
import LinkBtn from "@ui/link-btn";
export default function HeaderBtns() {
    const { user } = useUser();
    return (
        <>
            <LinkBtn text={user ? "Dashboard" : "Login"} href={user ? "/dashboard" : "/login"} />
            <button className='w-28 py-2 text-purple border border-purple rounded-md hover:opacity-80 transitionEase'>
                Try for free
            </button>
        </>
    );
}
