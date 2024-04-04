"use client";
import { useEffect, useState } from "react";
import { getUserFromLocalStorage } from "@utilities/utils";
import UserAvatar from "@profile/user-avatar";
import PersonalInfo from "@profile/personal-info";
import UserAddress from "@profile/user-address";
import UserPassword from "@profile/user-password";
export default function Page() {
    const [user, setUser] = useState(null);
    const [providerId, setProviderId] = useState(null);

    useEffect(() => {
        const user = getUserFromLocalStorage();
        if (user) {
            setUser(user);
            const providerId = user?.providerData[0].providerId;
            setProviderId(providerId);
        }
    }, []);

    return (
        <section className='bg-darkBlue h-full px-8 py-6'>
            <div className='grid lg:grid-cols-[auto_1fr]'>
                <div className='justify-self-center lg:justify-self-start pb-8 lg:pb-0 lg:pl-2 lg:pr-20'>
                    <UserAvatar user={user} />
                </div>
                <div className='grid gap-8'>
                    <PersonalInfo user={user} />
                    <UserAddress user={user} />
                    {providerId === "password" && <UserPassword user={user} />}
                </div>
            </div>
        </section>
    );
}
