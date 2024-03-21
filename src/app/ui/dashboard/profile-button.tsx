export default function ProfileButton({userName}: {userName: string}) {
    return (
        <button className='hidden lg:flex gap-2 items-center'>
            <div className='border-2 border-purple rounded-full w-9 h-9 grid place-items-center'>
                C
            </div>
            <span>Chinatu Lucia Eke</span>
        </button>
    );
}
