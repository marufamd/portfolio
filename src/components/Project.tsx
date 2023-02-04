
export default function Project({ href, name }: Record<string, string>) {
	return (
		<a href={`https://github.com/maruf99/${href}`} target="_blank" rel="noopener noreferrer" className="no-underline">
			<button
				type="button"
				className="
						bg-red-500
						hover:opacity-75
						hover:transition-all
						text-white
						font-bold
						py-2 px-4
						rounded-full
                        w-full
						"
			>
				{name}
			</button>
		</a>
	);
}
