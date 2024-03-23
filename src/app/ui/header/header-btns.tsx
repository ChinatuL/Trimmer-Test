"use client";
import { useEffect, useState } from "react";
import { getUserFromLocalStorage } from "@utilities/utils";
import LinkBtn from "@ui/link-btn";
export default function HeaderBtns() {
  const [user, setUser] = useState(null)
  
  useEffect(() => {
    const user = getUserFromLocalStorage()
    setUser(user)
}, [])

    return (
        <>
            <LinkBtn text={user ? "Dashboard" : "Login"} href={user ? "/dashboard" : "/login"} />
            <button className='w-28 py-2 text-purple border border-purple rounded-md hover:opacity-80 transitionEase'>
                Try for free
            </button>
        </>
    );
}
