import React from 'react';

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import BookCategory from './book-category';

describe('book category', () => {

	it('renders book category', () => {

		render(
			<BookCategory category="computers" />
		);

		expect(screen.getByText(/computers/i)).toBeInTheDocument();
	});

});