import { fireEvent, render, screen } from '@testing-library/react';
import Profile from '../index';

describe('Profile', () => {
	it('should render name, title and details', () => {
		const fakeData = {
			name: 'John Doe',
			title: 'Team Lead',
			details: 'This is my 5th year and I love helping others',
		};
		render(
			<Profile
				name={fakeData.name}
				title={fakeData.title}
				details={fakeData.details}
			/>,
		);
		screen.getByText(fakeData.name);
		screen.getByText(fakeData.title);
		screen.getByText(fakeData.details);
	});

	it('should hide details when the user clicks Hide Details', () => {
		const fakeData = {
			name: 'John Doe',
			title: 'Team Lead',
			details: 'This is my 5th year and I love helping others',
		};
		render(
			<Profile
				name={fakeData.name}
				title={fakeData.title}
				details={fakeData.details}
			/>,
		);
    fireEvent.click(screen.getByRole('button', { name: 'Hide Details'}))
    expect(screen.queryByText(fakeData.details)).toBeNull();
	});

  it('should show details when the user clicks Display Details', () => {
		const fakeData = {
			name: 'John Doe',
			title: 'Team Lead',
			details: 'This is my 5th year and I love helping others',
		};
		render(
			<Profile
				name={fakeData.name}
				title={fakeData.title}
				details={fakeData.details}
			/>,
		);
    fireEvent.click(screen.getByRole('button', { name: 'Hide Details'}))
    fireEvent.click(screen.getByRole('button', { name: 'Display Details'}))
    expect(screen.queryByText(fakeData.details)).not.toBeNull();
	});
});
