import { fireEvent, render, screen } from '@testing-library/react';
import { Counter } from '../index';

describe('Counter', () => {
	it('should render subtract and add button when Counter component is mounted', () => {
		render(<Counter />);
		screen.getByRole('button', {
			name: /Add/i,
		});
		screen.getByRole('button', {
			name: /Subtract/i,
		});
	});

	it('should counter start following props', () => {
		const randomNumber = Math.floor(Math.random() * 100);
		render(<Counter start={randomNumber} />);
		screen.getByText(randomNumber);
	});

	it('should add one to counter when the user click add button', () => {
		const randomNumber = Math.floor(Math.random() * 100);
		render(<Counter start={randomNumber} />);
		screen.getByText(randomNumber);
		fireEvent.click(
			screen.getByRole('button', {
				name: /Add/i,
			}),
		);
		screen.getByText(randomNumber + 1);
	});

  it('should subtract one to counter when the user click add button', () => {
		const randomNumber = Math.floor(Math.random() * 100);
		render(<Counter start={randomNumber} />);
		screen.getByText(randomNumber);
		fireEvent.click(
			screen.getByRole('button', {
				name: /Subtract/i,
			}),
		);
		screen.getByText(randomNumber - 1);
	});
});
