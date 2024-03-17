import Link from "next/link";

export default function NotFound() {
    return (
        <div className='flex justify-center items-center md:bg-auth-bg bg-cover w-full h-[100vh] text-zinc-50'>
            <div className='flex flex-col justify-center md:justify-end items-center py-8 px-8 rounded bg-darkBlue text-zinc-50 w-[100vw] h-[100vh] md:w-[80vw] md:h-[90vh] mx-auto bg-[url("/icons/404-mobile.svg")] md:bg-[url("/icons/404.svg")] bg-no-repeat bg-top md:bg-center'>
                <h1 className='font-semibold text-3xl'>OOPS</h1>
                <p className='text-lg pb-4'>Looks like you&apos;re lost</p>
                <Link href='/'>
                    <div className='px-4 py-2 bg-purple rounded-lg hover:opacity-70 transitionEase'>
                        Take Me Home
                    </div>
                </Link>
            </div>
        </div>
    );
}
