export default function GoogleButton({
    children, handleClick
}: {
    children: React.ReactNode, handleClick: () => Promise<void>
}) {
    return (
        <button type="button" onClick={handleClick} className='flex justify-center items-center gap-3 border border-zinc-50 rounded-lg py-3 transition duration-300 ease-in-out hover: hover:border-purple hover:text-purple'>
            {children}
        </button>
    );
}
