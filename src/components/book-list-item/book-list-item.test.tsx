import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import BookListItem from './book-list-item';

describe('book list item', () => {

	it('renders book list item', () => {

		const book = {
			id: '1',
			etag: '',
			thumbnail: '',
			title: 'Test book',
			categories: ['testing'],
			authors: [''],
			description: '',
			webReaderLink: '',
			selfLink: ''
		};

		render(
			<Router>
				<BookListItem book={book} />
			</Router>
		);

		expect(screen.getByText(/test book/i)).toBeInTheDocument();
		expect(screen.getByText(/testing/i)).toBeInTheDocument();
	});

});