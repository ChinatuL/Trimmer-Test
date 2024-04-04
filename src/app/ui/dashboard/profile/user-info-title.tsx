export default function UserInfoTitle({
    children,
    title,
}: {
    children: React.ReactNode;
    title: string;
}) {
    return (
        <div className='flex justify-between items-center'>
            <h2 className='text-lg font-semibold'>{title}</h2>
            <button>{children}</button>
        </div>
    );
}
