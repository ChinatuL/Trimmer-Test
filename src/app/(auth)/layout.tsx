export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <main className='flex flex-col justify-center items-center bg-auth-bg bg-no-repeat object-cover bg-cover w-full h-[100vh]'>
            {children}
        </main>
    );
}
