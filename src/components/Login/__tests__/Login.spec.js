import { render, screen } from '@testing-library/react';
import Login from '../index';

describe('Login', () => {
	test('Should render the form', () => {
		render(<Login />);
		expect(
			screen.getByRole('heading', {
				name: /sign in/i,
			}),
		).toBeInTheDocument();
	});

  test('Should exists username and password fields', () => {})

});
