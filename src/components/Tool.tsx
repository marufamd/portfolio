
export default function Tool({ name, icon }: { name: string; icon: JSX.Element }) {
    return (
        <li className="flex flex-row space-x-2">
            <span>{icon}</span>
            <span className="hidden md:inline">{name}</span>
        </li>
    );
}