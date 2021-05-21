import { render, screen } from '@testing-library/react';
import Login from '../index';

describe('Login', () => {
	it('Should render the form', () => {
		render(<Login />);
		expect(
			screen.getByRole('heading', {
				name: /sign in/i,
			}),
		).toBeInTheDocument();
	});

	it('Should exists username and password fields', () => {
		render(<Login />);
		expect(screen.getByTitle(/username/i)).toBeInTheDocument();
		expect(screen.getByTitle(/password/i)).toBeInTheDocument();
	});
});
