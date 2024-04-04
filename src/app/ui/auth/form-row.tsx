"use client";
import { useState } from "react";
import Image from "next/image";
import eyeSlash from "@icons/eye-slash.svg";
import eye from "@icons/eye.svg";

type FormRowProps = {
    labelText: string;
    type: string;
    name: string;
    placeholder: string;
    disabled?: boolean;
    value?: string;
};

export default function FormRow({
    labelText,
    type,
    name,
    placeholder,
    disabled,
    value,
}: FormRowProps) {
    const [showPassword, setShowPassword] = useState(false);

    function handlePasswordReveal() {
        setShowPassword(!showPassword);
    }

    return (
        <div className='relative'>
            <label htmlFor={name} className='sr-only'>
                {labelText}
            </label>
            <input
                type={
                    type === "password"
                        ? showPassword
                            ? "text"
                            : "password"
                        : type
                }
                name={name}
                id={name}
                placeholder={placeholder}
                disabled={name === "user-password" ? true : false}
                className='bg-[#0B0A1E] border border-zinc-50 rounded-xl w-full px-4 py-3 placeholder:text-sm placeholder:text-zinc-500 hover:border-purple focus:outline focus:outline-purple outline-offset-2 focus:border-zinc-500  transition duration-300 ease-in-out'
                value={value}
            />
            {type === "password" && (
                <button
                    type='button'
                    className='absolute right-3 top-3'
                    onClick={handlePasswordReveal}
                >
                    {showPassword ? (
                        <Image src={eyeSlash} alt='' />
                    ) : (
                        <Image src={eye} alt='' />
                    )}
                </button>
            )}
        </div>
    );
}
