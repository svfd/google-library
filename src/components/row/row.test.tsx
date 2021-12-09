import React from 'react';

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Row from './row';

describe('Row component', () => {

	it('renders row with content', () => {

		const left = <article>Left side</article>;
		const right = <article>Right side</article>;

		render(
			<Row left={left} right={right} />
		);

		expect(screen.getByText(/Left side/i)).toBeInTheDocument();
		expect(screen.getByText(/Right side/i)).toBeInTheDocument();
	});

});