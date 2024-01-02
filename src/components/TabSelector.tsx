import { useState, type ReactNode } from 'react';
import Tab from './Tab';
import type { Page } from '../util/config';


export default function TabSelector({ tabs }: { tabs: Record<string, Page> }) {
	const keys = Object.keys(tabs);
	const components = Object.values(tabs);

	const location = window.location.href.split('#');

	const curr = location.length > 1 ? location.pop() : keys[0];

	const [selected, setSelected] = useState(curr);

	const handleClick = (tab: string) => {
		return () => {
			setSelected(tab);
		};
	};

	return (
		<>
			<div
				className="
        text-sm
        font-medium
        text-center 
        text-gray-500 
        dark:text-gray-400 
        dark:border-gray-700"
			>
				<ul className="flex flex-wrap -mb-px items-center justify-center">
					{
						keys.map((k) => {
							return <Tab key={k} name={k} selected={selected === k} onClick={handleClick(k)} />;
						}) as ReactNode
					}
				</ul>
			</div>
			<div
				className="
                flex
                items-center
                justify-center
                p-4
                max-w-3xl
                mx-auto
                "
			>
				{components.map((TabPage, index) => {
					return (
						<div key={index} className="pb-12">
							<TabPage key={index} active={selected === keys[index]} />
						</div>
					);
				})}
			</div>
		</>
	);
}
