import type { ReactNode } from 'react';

export function Timeline({ children }: { children: ReactNode }) {
	return <ol className="ml-[5px]">{children}</ol>;
}

interface TimelineItemProps {
	title: string;
	subtitle: string;
	dates?: string;
	current?: boolean;
	children?: ReactNode;
}

export function TimelineItem({ title, subtitle, dates, current, children }: TimelineItemProps) {
	return (
		<li className="relative pb-10 pl-7 before:absolute before:left-[-0.5px] before:top-[14px] before:h-full before:w-px before:bg-stone-200 last:pb-0 last:before:hidden sm:pl-9 dark:before:bg-stone-800">
			<span
				className={`absolute -left-[6px] top-[9px] h-[11px] w-[11px] rounded-full ring-4 ring-stone-50 dark:ring-stone-950 ${
					current ? 'bg-sunset-gradient' : 'border-2 border-stone-300 bg-stone-50 dark:border-stone-600 dark:bg-stone-950'
				}`}
				aria-hidden
			/>
			<div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
				<div>
					<h3 className="text-lg font-semibold leading-7">{title}</h3>
					<p className="text-base text-stone-700 dark:text-stone-300">{subtitle}</p>
				</div>
				{dates && (
					<p className="shrink-0 text-sm tabular-nums text-stone-600 sm:text-right dark:text-stone-400">
						{dates}
					</p>
				)}
			</div>
			{children}
		</li>
	);
}
