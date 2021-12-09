import React from 'react';

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import BookName from './book-name';

describe('book name component', () => {

	it('renders book name', () => {

		render(
			<BookName name="Test name" />
		);

		expect(screen.getByText(/Test name/i)).toBeInTheDocument();
	});

});