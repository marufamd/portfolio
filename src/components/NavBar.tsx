import { RxHamburgerMenu } from 'react-icons/rx';
import { useEffect, useState } from 'react';
import { FaMoon } from 'react-icons/fa';
import { IoCloseSharp, IoSunny } from 'react-icons/io5';

import { NAV_LINKS } from '../util/config';

import logo from '../assets/branding/logo.png';
import darkLogo from '../assets/branding/logo-dark.png';
import profile from '../assets/branding/profile.png';

const THEME_KEY = 'dark-theme';

export default function NavBar() {
	const [darkTheme, setDarkTheme] = useState(true);
	const [isOpen, setIsOpen] = useState(false);
	

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
		<nav className="py-1 top-0 sticky z-50 bg-white dark:bg-neutral-800 border-b-gray-100 dark:border-b-neutral-900 border-b-2">
			<div className="flex items-center justify-between">
				<div className="hidden md:inline dark:hidden m-2">
					<img className="h-10" src={logo} alt="Logo" />
				</div>
				<div className="hidden dark:md:inline m-2">
					<img className="h-10" src={darkLogo} alt="Logo" />
				</div>
				<div className="md:hidden m-2">
					<img className="w-10 h-10 rounded-full" src={profile} alt="Logo" />
				</div>

				<div className="flex items-center justify-center mr-2">
					<div className="flex flex-row justify-center space-x-4 mr-4">
						{NAV_LINKS.map((link) => {
							return (
								<a className="hidden md:inline" key={link} href={`#${link.toLowerCase()}`}>
									<button type="button" className="font-['Afacad_Flux'] font-semibold text-xl hover:underline hover:underline-offset-8 transition-all">{link}</button>
								</a>
							);
						})}
					</div>
					<button
						type="button"
						onClick={() => {
							setIsOpen((prev) => !prev);
						}}
						className="md:hidden m-2 p-2 mr-1 rounded-md bg-gray-100 dark:bg-neutral-900 hover:transition-all hover:opacity-75"
					>
						{isOpen ? <IoCloseSharp className="h-6 w-6" /> : <RxHamburgerMenu className="h-6 w-6" />}
					</button>
					<button
						type="button"
						onClick={() => {
							setDarkTheme((prev) => !prev);
						}}
						className="m-2 p-2 ml-1 rounded-md bg-gray-100 dark:bg-neutral-900 hover:transition-all hover:opacity-75"
					>
						{darkTheme ? <IoSunny className="w-6 h-6" /> : <FaMoon className="w-6 h-6" />}
					</button>
				</div>
			</div>
			<div
				className={`${
					isOpen ? '' : 'hidden'
				} flex flex-col space-y-1 items-end justify-center px-4 py-2 mt-1 border-t-gray-100 dark:border-t-neutral-900 border-t-2`}
			>
				{NAV_LINKS.map((link) => {
					return (
						<a className="block font-semibold font-['Afacad_Flux'] text-xl hover:underline hover:underline-offset-8 transition-all" key={link} href={`#${link.toLowerCase()}`}>
							{link}
						</a>
					);
				})}
			</div>
		</nav>
	);
}
