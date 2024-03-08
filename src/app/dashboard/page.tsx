"use client";
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import { auth } from "../lib/firebase/firebase-config";
import { baseUrl } from "../lib/utilities/utils";
export default function Page() {
    const router = useRouter();

    async function logout() {
        await signOut(auth);
        const response = await fetch(`${baseUrl}/api/logout`, {
            method: "POST",
        });
        if (response.status === 200) {
            router.push("/login");
        }
    }

    return (
        <div>
            <h1>Dashboard</h1>
            <button
                className='bg-violet-800 text-zinc-50 py-2 px-2 w-auto'
                onClick={logout}
            >
                Logout
            </button>
        </div>
    );
}
