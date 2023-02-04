
export default function Heading({ title }: { title: string }) {
	return (
		<h2
			className="
                        text-white
                        text-2xl 
                        font-bold
                    "
		>
			{title}
		</h2>
	);
}