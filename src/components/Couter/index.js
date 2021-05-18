import { useState } from 'react';

export const Counter = ({ start }) => {
	const [value, setValue] = useState(start);

	return (
		<main>
			<button onClick={() => setValue(value - 1)}>Subtract</button>
			<p>{value}</p>
			<button onClick={() => setValue(value + 1)}>Add</button>
		</main>
	);
};
