type AuthFormProps = {
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    children: React.ReactNode;
};

export default function AuthForm({ handleSubmit, children }: AuthFormProps) {
    return (
        <form onSubmit={handleSubmit} className='grid place-items-center w-full'>
            {children}
        </form>
    );
}
