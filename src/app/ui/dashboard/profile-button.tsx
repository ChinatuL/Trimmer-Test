"use client";
import { useEffect, useState } from "react";
import { getUserFromLocalStorage } from "@utilities/utils";
export default function ProfileButton() {
    const [userName, setUserName] = useState("");
    useEffect(() => {
      const user = getUserFromLocalStorage();
        setUserName(user.displayName);
    }, []);

    return (
        <button className='hidden lg:flex gap-2 items-center'>
            <div className='border-2 border-purple rounded-full w-9 h-9 grid place-items-center'>
                {userName.charAt(0)}
            </div>
            <span>{userName}</span>
        </button>
    );
}
