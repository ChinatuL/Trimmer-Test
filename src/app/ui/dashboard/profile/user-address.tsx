"use client";
import { useState } from "react";
import UserInfoTitle from "./user-info-title";
import EditBtn from "./edit-btn";
import UserInfo from "./user-info";
export default function UserAddress({ user }: { user: any }) {
    const [country, setCountry] = useState("Nigeria");
    const [city, setCity] = useState("Lagos");
    return (
        <div className='grid gap-4 bg-analyticsBg px-8 py-8 border-t-2 border-t-purple border-r-2 border-r-purple rounded-xl shadow-md'>
            <UserInfoTitle title='Address'>
                <EditBtn section='address' />
            </UserInfoTitle>
            <div className='grid gap-4 md:grid-cols-2'>
                <UserInfo title='Country' info={country} />
                <UserInfo title='State/City' info={city} />
            </div>
        </div>
    );
}
