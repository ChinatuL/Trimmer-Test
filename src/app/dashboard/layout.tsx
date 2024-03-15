import SideNav from "@dashboard/side-nav";
import DashboardHeader from "@dashboard/header";
export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className='grid grid-cols-[auto_1fr] w-full min-h-[100vh] h-full bg-gradient-to-tr from-darkPurple from-10% via-darkBlue via-40% to-darkPurple to-95% text-zinc-50 pr-4'>
            <SideNav />
            <main className='grid grid-rows-[auto_1fr]'>
                <DashboardHeader />
                <section>{children}</section>
            </main>
        </div>
    );
}
