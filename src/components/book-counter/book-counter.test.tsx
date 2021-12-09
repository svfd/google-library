import React from 'react';

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import BookCounter from './book-counter';

describe('book counter', () => {

	it('renders book counter', () => {

		const bookQuantity = 50;

		render(
			<BookCounter quantity={bookQuantity} />
		);

		expect(screen.getByText(/Total books:/i)).toBeInTheDocument();
		expect(screen.getByText(50)).toBeInTheDocument();
	});

});