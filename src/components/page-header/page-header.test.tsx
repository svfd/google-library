import React from 'react';

import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import PageHeader from './page-header';

import { WithProviderAndRouter } from 'src/helpers';

describe('Page header component', () => {

	it('renders page header', () => {

		render(
			<WithProviderAndRouter>
				<PageHeader />
			</WithProviderAndRouter>
		);

		expect(screen.getByText(/Google Library/i)).toBeInTheDocument();
		expect(screen.getByRole('searchbox')).toBeInTheDocument();
	});

	it('changes search field value', () => {

		render(
			<WithProviderAndRouter>
				<PageHeader />
			</WithProviderAndRouter>
		);

		const searchField = screen.getByRole('searchbox');

		expect(searchField).toBeInTheDocument();
		expect(searchField).not.toHaveValue();

		userEvent.type(searchField, 'jest');

		expect(searchField).toHaveValue('jest');
	});

});