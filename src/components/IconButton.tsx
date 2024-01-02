import { useMemo } from 'react';
import { IconContext, type IconType } from 'react-icons';

export default function IconButton({ href, Icon }: { href: string; Icon: IconType }) {
	const value = useMemo(() => ({ className: 'w-8 h-8' }), []);

	return (
		<a
			href={href}
			target="_blank"
			rel="noopener noreferrer"
			className="
        no-underline
        hover:opacity-50
        hover:transition-all
        "
		>
			<IconContext.Provider value={value}>
				<div>
					<Icon />
				</div>
			</IconContext.Provider>
		</a>
	);
}
