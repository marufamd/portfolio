import type { MouseEventHandler } from 'react';

export default function Tab({ name, selected, onClick }: { name: string; selected: boolean; onClick: MouseEventHandler<HTMLLIElement> }) {
    let classes = `
    inline-block
    p-2
    border-b-2
    rounded-t-lg
    `;

    if (selected) {
        classes += `
        text-neutral-800
        border-neutral-800
        dark:text-white
        dark:border-white
        active
        `;
    } else {
        classes += `
        border-transparent
        hover:text-gray-300 
        hover:border-gray-300
        hover:transition-all
        `;
    }


	return (
		<li className="me-2" onClick={onClick}>
			<a
				href={`#${name}`}
				className={classes}
			>
				{name}
			</a>
		</li>
	);
}
