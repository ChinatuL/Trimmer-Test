export default function FormTitle({
    title,
    desc,
}: {
    title: string;
    desc: string;
}) {
    return (
        <div className='text-center'>
            <h1 className='text-2xl font-bold'>{title}</h1>
            <p className='font-semibold'>{desc}</p>
        </div>
    );
}
