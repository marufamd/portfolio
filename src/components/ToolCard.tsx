import { useMemo } from 'react';
import { IconContext, type IconType } from 'react-icons';

export default function ToolCard({ name, Icon }: { name: string; Icon: IconType }) {
	const value = useMemo(() => ({ className: 'w-8 h-8' }), []);

	return (
		<div
			className={`
			flex
            flex-col
			items-center
            gap-2
          bg-gray-200 
          dark:bg-neutral-900
            p-6
            rounded-2xl
            hover:opacity-85
            transition-all`}
		>
			<IconContext.Provider value={value}>
				<div>
					<Icon />
				</div>
			</IconContext.Provider>
			<h3 className="font-bold">{name}</h3>
		</div>
	);
}
