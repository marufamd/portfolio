import type { IconType } from 'react-icons';

export default function LinkButton({ className = '', text, href, Icon }: { className?: string; text: string; href: string; Icon: IconType }) {
	return (
		<a href={href} target="_blank" rel="noopener noreferrer" className="no-underline">
			<button
				type="button"
				className={`
            flex
            rounded-full
            items-center
			justify-center
            h-9
            py-2
            px-4
            font-bold
            hover:opacity-75
            hover:transition-all
            ${className}
            `}
			>
				<span className="pr-1">
					<Icon />
				</span>
                {text}
			</button>
		</a>
	);
}
