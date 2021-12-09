import React from 'react';

import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import SearchField from './search-field';

describe('search field', () => {

	const setup = () => {

		const state = {
			value: '',
			onValueChange: jest.fn()
		};

		return {state};
	};

	it('renders search field', () => {

		const { state } = setup();
		const { onValueChange } = state;

		render(
			<SearchField {...state} />
		);

		const searchField = screen.getByRole('searchbox');
		fireEvent.change(searchField, {target: {value: 'computers'}});

		expect(onValueChange).toHaveBeenCalledTimes(1);
		expect(onValueChange).toHaveBeenCalledWith('computers');
	});

});