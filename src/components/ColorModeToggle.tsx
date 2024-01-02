import { useEffect, useState } from 'react';
import { FaMoon } from 'react-icons/fa';
import { IoSunny } from 'react-icons/io5';

const THEME_KEY = 'dark-theme';

export default function ColorModeToggle() {
	const [darkTheme, setDarkTheme] = useState(true);

	useEffect(() => {
		const isDark = localStorage.getItem(THEME_KEY) ? localStorage.getItem(THEME_KEY) === 'true' : true;

		localStorage.setItem(THEME_KEY, isDark.toString());
		setDarkTheme(isDark);
	}, []);

	useEffect(() => {
		document.documentElement.classList.toggle('dark', darkTheme);
		localStorage.setItem(THEME_KEY, darkTheme.toString());
	}, [darkTheme]);

	return (
		<button
			type="button"
			onClick={() => {
				setDarkTheme((prev) => !prev);
			}}
			className="
        flex
        items-center
		justify-center
        rounded-full
        font-bold
        bg-gray-300
        dark:bg-neutral-900
        h-10
        mt-3
        py-2
        px-4
        hover:transition-all
        hover:opacity-75
        "
		>
			<span className="pr-2">{darkTheme ? <IoSunny /> : <FaMoon />}</span>
			{darkTheme ? 'Light' : 'Dark'} Mode
		</button>
	);
}
