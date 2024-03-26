"use client";

import "react-toastify/dist/ReactToastify.css";
import "@/app/globals.css";
import { ToastContainer } from "react-toastify";
import { Slide } from "react-toastify";

interface ToastProviderProps {
    children: React.ReactNode;
}

export default function ToastProvider({ children }: ToastProviderProps) {
    return (
        <>
            {children}
            <ToastContainer
                theme='dark'
                autoClose={3000}
                closeOnClick
                transition={Slide}
            />
        </>
    );
}
