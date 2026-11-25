import type { ReactNode } from 'react';

export default function Section({ id, title, children }: { id: string; title: string; children: ReactNode }) {
	return (
		<section id={id} aria-labelledby={`${id}-title`} className="scroll-mt-24 pt-16 sm:pt-20">
			<h2 id={`${id}-title`} className="mb-8 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
				{title}
			</h2>
			{children}
		</section>
	);
}
