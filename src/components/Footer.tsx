import { PROFILE_LINKS, USER } from '../util/config';

export default function Footer() {
	return (
		<footer className="mt-24 border-t border-stone-200 dark:border-stone-800">
			<div className="mx-auto flex max-w-3xl items-center justify-between gap-4 px-5 py-8 text-sm text-stone-600 sm:px-8 dark:text-stone-400">
				<p>
					&copy; {new Date().getFullYear()} {USER.NAME}
				</p>
				<ul className="flex gap-1">
					{PROFILE_LINKS.map(({ label, url, icon: Icon }) => (
						<li key={label}>
							<a
								href={url}
								target="_blank"
								rel="noopener noreferrer"
								aria-label={`${label} (opens in a new tab)`}
								className="grid h-10 w-10 place-items-center rounded-lg transition-colors hover:bg-stone-200/70 hover:text-stone-900 dark:hover:bg-stone-800 dark:hover:text-stone-50"
							>
								<Icon className="h-5 w-5" aria-hidden />
							</a>
						</li>
					))}
				</ul>
			</div>
		</footer>
	);
}
