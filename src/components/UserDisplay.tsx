import ColorModeToggle from "./ColorModeToggle";

export default function UserDisplay({ name, icon }: { name: string; icon: string }) {
	return (
		<div className="container flex flex-col w-screen justify-center items-center mx-auto py-5">
			<img src={icon} className="rounded-full w-32 h-32" />
			<h1 className="text-4xl font-bold pt-3">👋 Hi, I'm <span className="text-red-500">{name}</span>!</h1>
			<ColorModeToggle />
		</div>
	);
}
