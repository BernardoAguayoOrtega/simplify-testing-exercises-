import { render, screen } from '@testing-library/react';
import { Counter } from '../index';

describe('Counter', () => {
	it('should render subtract and add button when Counter component is mounted', () => {
		render(<Counter />);
    screen.getByRole()
	});
});
