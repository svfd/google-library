import React from 'react';

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import BookDescription from './book-description';

describe('book description', () => {

	it('renders book description', () => {

		render(
			<BookDescription description="Test description" />
		);

		expect(screen.getByText(/Test description/i)).toBeInTheDocument();
	});

});