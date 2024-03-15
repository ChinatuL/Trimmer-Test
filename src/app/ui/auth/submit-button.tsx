export default function SubmitButton({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <button
            type='submit'
            className='grid place-items-center bg-purple w-full py-3 rounded-lg transition duration-300 ease-in-out hover:opacity-70'
        >
            {children}
        </button>
    );
}
