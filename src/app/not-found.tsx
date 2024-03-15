import Link from "next/link";
export default function NotFound() {
    return (
        <div className='bg-auth-bg bg-cover w-full h-[100vh] text-zinc-50'>
            <h2>Not Found</h2>
            <p>Could not find requested resource</p>
            <Link href='/'>Return Home</Link>
        </div>
    );
}
