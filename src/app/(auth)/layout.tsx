import BackToHomeButton from "@ui/back-to-home-btn";
export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
      <main className='relative flex flex-col justify-center items-center bg-auth-bg bg-no-repeat object-cover bg-cover w-full h-[100vh]'>
        <BackToHomeButton />
            {children}
        </main>
    );
}
