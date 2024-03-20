import SideNav from "@dashboard/side-nav";
import DashboardHeader from "@dashboard/header";
export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className='grid lg:grid-cols-[auto_1fr] w-full min-h-[100vh] h-full bg-gradient-to-tr from-darkPurple from-10% via-darkBlue via-40% to-darkPurple to-95% text-zinc-50 pr-4'>
            <SideNav />
            <main className='grid grid-rows-[auto_1fr] mb-24 lg:pb-0'>
                <DashboardHeader />
                <section className="max-w-[1300px] h-full min-h-[100vh]">{children}</section>
            </main>
        </div>
    );
}
