import type { IconType } from 'react-icons';

export default function ToolButton({ className = '', name, Icon }: { className?: string; name: string; Icon: IconType }) {
	return (
		<button
			type="button"
			className={`
			flex
			items-center
			justify-center
        hover:opacity-75
		hover:transition-all
		font-bold
		text-sm
		py-2 px-4
		rounded-full
		h-7
        ${className}
        `}
		>
			<span className="pr-2"><Icon /></span>
			{name}
		</button>
	);
}
