import Link from "next/link";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {

    return (
        <>
            <header>
                <div>
                    <Link href='/dashboard'>Home</Link>
                </div>
                <div>
                    <Link href='/links'>Links</Link>
                </div>
                <div>
                    <Link href='/analytics'>Analytics</Link>
                </div>
            </header>
            <main className='flex min-h-screen flex-col items-center justify-between p-24'>
                {children}
            </main>
        </>
    );
}
