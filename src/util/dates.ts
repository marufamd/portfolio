const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function parse(value: string) {
	const [year, month] = value.split('-').map(Number);
	return { year, month };
}

// `2026-09` → `Sep 2026`
export function formatMonth(value: string) {
	const { year, month } = parse(value);
	return `${MONTHS[month - 1]} ${year}`;
}
