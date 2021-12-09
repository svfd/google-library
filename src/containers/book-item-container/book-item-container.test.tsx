import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { WithProviderAndRouter } from 'src/helpers';

import type { Props } from './book-item-container';
import { BookItemContainer } from './book-item-container';

describe('book item container', () => {

	const setup = () => {

		const state: Props = {
			book: {
				id: '1',
				etag: '',
				loading: false,
				error: false,
				thumbnail: '',
				title: 'testing library',
				categories: ['computers'],
				authors: ['Kent C'],
				description: 'writing tests',
				webReaderLink: '',
				selfLink: ''
			},
			fetchBookById: jest.fn()
		};

		return {state};
	};

	it('renders book item container', () => {

		const { state } = setup();

		render(
			<WithProviderAndRouter>
				<BookItemContainer {...state} />
			</WithProviderAndRouter>
		);

		expect(screen.getByRole('article')).toBeInTheDocument();
		expect(screen.getByText(/testing library/i)).toBeInTheDocument();
		expect(screen.getByText(/computers/i)).toBeInTheDocument();
		expect(screen.getByText(/kent c/i)).toBeInTheDocument();
		expect(screen.getByText(/writing tests/i)).toBeInTheDocument();
	});

	it('render book item container with error', () => {

		const { state } = setup();

		state.book.error = true;

		render(
			<WithProviderAndRouter>
				<BookItemContainer {...state} />
			</WithProviderAndRouter>
		);

		expect(screen.getByText(/request error/i)).toBeInTheDocument();
	});

});