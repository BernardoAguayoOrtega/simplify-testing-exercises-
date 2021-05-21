import { fireEvent, render, screen } from '@testing-library/react';
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
		expect(screen.getByPlaceholderText(/username/i)).toBeInTheDocument();
		expect(screen.getByPlaceholderText(/password/i)).toBeInTheDocument();
	});

	it('Should type name and password fields', () => {
		render(<Login />);

    const fakeData = {
      name: 'Bernardo Aguayo',
      password: 'ohiifasfoafsnoasdk'
    }
		const nameField = screen.getByPlaceholderText(/username/i);
    const passwordField = screen.getByPlaceholderText(/password/i)

    fireEvent.change(nameField, { target: { value: fakeData.name } })
    fireEvent.change(passwordField, { target: { value: fakeData.password } })
    
    expect(screen.getByDisplayValue(fakeData.name)).toBeInTheDocument()
    expect(screen.getByDisplayValue(fakeData.password)).toBeInTheDocument()
	});
});
