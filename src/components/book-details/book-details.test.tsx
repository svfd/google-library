import React from 'react';

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import BookDetails from './book-details';

describe('book details', () => {

	it('renders book details', () => {

		const book = {
			id: '0',
			etag: '',
			authors: ['Someone'],
			thumbnail: '',
			title: 'Test book',
			categories: ['testing'],
			description: 'You can write incredible tests with this book' ,
			webReaderLink: '',
			selfLink: ''
		};

		render(
			<BookDetails book={book} />
		);

		expect(screen.getByText(/Test book/i)).toBeInTheDocument();
		expect(screen.getByText(/testing/i)).toBeInTheDocument();
		expect(screen.getByText(/You can write incredible tests with this book/i)).toBeInTheDocument();
	});

});