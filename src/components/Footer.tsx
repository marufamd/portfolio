export default function Footer({ name }: { name: string; }) {
	return (
		<footer className="mx-auto bg-gray-200 dark:bg-neutral-900 w-screen flex justify-center items-center p-4">
			<h3 className="text-sm font-semibold">&copy; 2024 {name}. All rights reserved.</h3>
		</footer>
	);
}
