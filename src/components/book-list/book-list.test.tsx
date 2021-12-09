import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { GoogleBooksServiceMock } from 'mocks/google-books-service-mock';

import BookList from './book-list';

const googleBooksService = new GoogleBooksServiceMock();

describe('book list', () => {

	it('renders book list', async () => {

		const books = googleBooksService.transformBooks(await googleBooksService.search(''));

		render(
			<Router>
				<BookList bookList={books.items} />
			</Router>
		);

		expect(screen.getAllByRole('article')).toHaveLength(4);
	});

});