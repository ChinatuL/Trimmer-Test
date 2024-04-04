"use client";
import { useState } from "react";
import UserInfoTitle from "./user-info-title";
import EditBtn from "./edit-btn";
import UserInfo from "./user-info";
export default function PersonalInfo({ user }: { user: any }) {
    const [bio, setBio] = useState("I am a person");
    const firstName = user?.displayName.split(" ")[0];
    const lastName = user?.displayName.split(" ").slice(1).join(" ");
    const email = user?.email;
    const phone = user?.providerData[0].phoneNumber;

    return (
        <div className='grid gap-4 bg-analyticsBg px-8 py-8 border-t-2 border-t-purple border-r-2 border-r-purple rounded-xl shadow-md'>
            <UserInfoTitle title='Personal Information'>
                <EditBtn section='personal info' />
            </UserInfoTitle>
            <div className='grid gap-4 md:grid-cols-2 md:gap-6'>
                <UserInfo title='First Name' info={firstName} />
                <UserInfo title='Last Name' info={lastName} />
                <UserInfo title='Email' info={email} />
                <UserInfo title='Phone Number' info={phone ? phone : "none"} />
                <UserInfo title='Bio' info={bio} />
            </div>
        </div>
    );
}
