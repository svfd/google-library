import React from 'react';

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { WithProviderAndRouter } from 'src/helpers';
import { GoogleBooksServiceMock } from 'mocks/google-books-service-mock';

import type { Props } from './books-container';
import { BooksContainer } from './books-container';

const googleBooksService = new GoogleBooksServiceMock();

beforeAll(() => {
	jest.spyOn(URLSearchParams.prototype, 'get').mockReturnValue('some query');
});

describe('books container', () => {

	const setup = () => {

		const state: Props = {
			books: {items: [], totalItems: 0, loading: false, error: false},
			categories: {
				list: [],
				currentValue: '',
			},
			sorting: {
				categories: [],
    		currentValue: ''
			},
			searchBooks: () => {},
			onClearBookList: () => {}
		};

		return {state};
	};

	it('renders books container', () => {

		const { state } = setup();

		render(
			<WithProviderAndRouter>
				<BooksContainer {...state} />
			</WithProviderAndRouter>
		);

		expect(screen.queryByText(/Books weren\'t found/i)).toBeInTheDocument();
	});

	it('renders books container with books', async () => {

		const { state } = setup();

		const items = googleBooksService.transformBooks(await googleBooksService.search(''));

		state.books = {...state.books, ...items};

		render(
			<WithProviderAndRouter>
				<BooksContainer {...state} />
			</WithProviderAndRouter>
		);

		expect(screen.getAllByRole('article')).toHaveLength(4);
		expect(screen.getByLabelText(/books count/i)).toHaveTextContent('4');
	});

	it('renders books conainer with error', () => {

		const { state } = setup();

		state.books.error = true;

		render(
			<WithProviderAndRouter>
				<BooksContainer {...state} />
			</WithProviderAndRouter>
		);

		expect(screen.getByText(/error/i)).toBeInTheDocument();
	});
});