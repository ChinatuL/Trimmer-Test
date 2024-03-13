import Link from "next/link";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {

    return (
        <div className="grid grid-cols-[auto_1fr] h-full w-full">
            <header className="flex flex-col gap-2 h-full border-r border-r-purple-500 px-8 py-4">
                <div>
                    <Link href='/dashboard' className="hover:text-purple-500">Home</Link>
                </div>
                <div>
                    <Link href='/dashboard/links' className="hover:text-purple-500">Links</Link>
                </div>
                <div>
                    <Link href='/dashboard/analytics' className="hover:text-purple-500">Analytics</Link>
                </div>
            </header>
            <main className='flex min-h-screen flex-col items-center justify-between p-24'>
                {children}
            </main>
        </div>
    );
}
