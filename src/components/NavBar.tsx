import { useEffect, useState } from 'react';
import { LuMoon, LuSun } from 'react-icons/lu';

import { NAV_LINKS, USER } from '../util/config';

const THEME_KEY = 'dark-theme';

export default function NavBar() {
	// index.html sets the class before first paint; read it so the toggle starts in sync.
	const [darkTheme, setDarkTheme] = useState(() => document.documentElement.classList.contains('dark'));

	useEffect(() => {
		document.documentElement.classList.toggle('dark', darkTheme);
		localStorage.setItem(THEME_KEY, String(darkTheme));
	}, [darkTheme]);

	return (
		<nav className="sticky top-0 z-50 border-b border-stone-200 bg-stone-50/95 dark:border-stone-800 dark:bg-stone-950/95">
			<div className="mx-auto flex h-16 max-w-3xl items-center justify-between gap-4 px-5 sm:px-8">
				<a href="#about" className="font-display text-xl font-semibold tracking-tight">
					{USER.NAME}
				</a>
				<div className="flex items-center gap-1 sm:gap-2">
					<ul className="hidden items-center gap-1 sm:flex">
						{NAV_LINKS.map((link) => (
							<li key={link.href}>
								<a
									href={link.href}
									className="rounded-md px-3 py-2 text-sm font-medium text-stone-600 transition-colors hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-50"
								>
									{link.label}
								</a>
							</li>
						))}
					</ul>
					<button
						type="button"
						onClick={() => setDarkTheme((prev) => !prev)}
						aria-label={darkTheme ? 'Switch to light mode' : 'Switch to dark mode'}
						title={darkTheme ? 'Switch to light mode' : 'Switch to dark mode'}
						className="grid h-10 w-10 place-items-center rounded-lg text-stone-600 transition-colors hover:bg-stone-200/70 hover:text-stone-900 dark:text-stone-400 dark:hover:bg-stone-800 dark:hover:text-stone-50"
					>
						{darkTheme ? <LuSun className="h-5 w-5" aria-hidden /> : <LuMoon className="h-5 w-5" aria-hidden />}
					</button>
				</div>
			</div>
		</nav>
	);
}
