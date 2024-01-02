export default function Footer({ name }: { name: string; }) {
	return (
		<footer className="mx-auto bg-gray-200 dark:bg-neutral-900 fixed bottom-0 w-screen flex justify-center items-center p-4">
			<h3 className="text-sm text-neutral-500 dark:text-gray-400 font-semibold">© 2024 {name}. All rights reserved.</h3>
		</footer>
	);
}
