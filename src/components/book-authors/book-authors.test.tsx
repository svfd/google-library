import React from 'react';

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import BookAuthors from './book-authors';

describe('book auhtors', () => {

	it('renders book category', () => {

		render(
			<BookAuthors authors={['Kent C.', 'Dods']} />
		);

		expect(screen.getByText(/Kent C/i)).toBeInTheDocument();
		expect(screen.getByText(/Dods/i)).toBeInTheDocument();
	});

});