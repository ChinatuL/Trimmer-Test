import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ToastProvider from "@lib/react-toastify/ToastProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Trimmer | Url Shortener",
    description: "A simple url shortener",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang='en'
            style={{ scrollBehavior: "smooth" }}
            className={inter.className}
        >
            <body>
                <ToastProvider>{children}</ToastProvider>
            </body>
        </html>
    );
}
