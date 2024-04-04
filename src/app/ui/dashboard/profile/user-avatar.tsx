export default function UserAvatar({ user }: { user: any }) {
    return (
        <div>
            <div className='flex justify-center items-center w-24 h-24 border-[3px] border-purple rounded-full text-5xl bg-purple'>
                {user?.displayName.charAt(0)}
            </div>
            <p>{user?.displayName}</p>
        </div>
    );
}
