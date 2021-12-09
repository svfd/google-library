import React from 'react';

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { WithProviderAndRouter } from 'src/helpers';
import { GoogleBooksServiceMock } from 'mocks/google-books-service-mock';

import type { Props } from './random-books-container';
import { RandomBooksContainer } from './random-books-container';

const googleBooksService = new GoogleBooksServiceMock();

describe('random books container', () => {

	const setup = () => {

		const state: Props = {
			randomBooks: {
				items: [],
				queries: ['IT', 'Math', 'Operating system', 'Cooking', 'Learning'],
				loading: false,
				error: false,
			},
			fetchRandomBooks: () => {}
		};

		return {state};
	};

	it('renders books from the list of random categories', async () => {

		let { state } = setup();

		const items = googleBooksService.transformBooks(await googleBooksService.search(''));

		state.randomBooks = {...state.randomBooks, ...items};

		render(
			<WithProviderAndRouter>
				<RandomBooksContainer {...state} />
			</WithProviderAndRouter>
		);

		expect(screen.getByText(/Random query: (IT|Math|Operating System|Cooking|Learning)/i)).toBeInTheDocument();
		expect(screen.getAllByRole('article')).toHaveLength(4);
	});

	it('renders random books with an error', () => {

		const { state } = setup();

		state.randomBooks.error = true;

		render(
			<WithProviderAndRouter>
				<RandomBooksContainer {...state} />
			</WithProviderAndRouter>
		);

		expect(screen.getByText(/Request error/i)).toBeInTheDocument();
	});

});