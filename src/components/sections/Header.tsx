import { LuArrowUpRight } from 'react-icons/lu';

import { PROFILE_LINKS, USER } from '../../util/config';

export default function Header() {
	return (
		<header id="about" className="scroll-mt-24 pt-6 sm:pt-10">
			<div className="h-36 animate-banner rounded-2xl bg-sunset-gradient sm:h-48" aria-hidden />
			<div>
				<img
					src={USER.AVATAR}
					alt={`Portrait of ${USER.NAME}`}
					width={160}
					height={160}
					className="-mt-14 ml-5 animate-avatar h-28 w-28 rounded-full bg-stone-300 object-cover ring-4 ring-stone-50 sm:-mt-20 sm:ml-8 sm:h-40 sm:w-40 sm:ring-[6px] dark:ring-stone-950"
				/>
				<h1 className="mt-5 text-balance font-display text-5xl font-semibold tracking-tight sm:text-6xl">{USER.NAME}</h1>
				<p className="mt-3 max-w-[60ch] text-pretty text-lg leading-relaxed text-stone-600 dark:text-stone-400">{USER.HEADLINE}</p>
				<ul className="mt-6 flex flex-wrap gap-3">
					{PROFILE_LINKS.map(({ label, url, icon: Icon }) => (
						<li key={label}>
							<a
								href={url}
								target="_blank"
								rel="noopener noreferrer"
								className="group inline-flex items-center gap-2 rounded-lg border border-stone-300 px-4 py-2.5 text-sm font-medium transition-colors hover:border-red-500 hover:text-red-600 dark:border-stone-700 dark:hover:border-red-400 dark:hover:text-red-400"
							>
								<Icon className="h-[18px] w-[18px]" aria-hidden />
								{label}
								<LuArrowUpRight
									className="h-4 w-4 text-stone-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-current dark:text-stone-500"
									aria-hidden
								/>
								<span className="sr-only">(opens in a new tab)</span>
							</a>
						</li>
					))}
				</ul>
			</div>
		</header>
	);
}
