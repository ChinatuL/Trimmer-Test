export default function UserInfo({
    title,
    info,
}: {
    title: string;
    info: string;
}) {
    return (
        <div className="grid gap-1">
            <p className="text-purple">{title}</p>
            <p>{info}</p>
        </div>
    );
}
