import React from 'react';

import { screen, render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import { WithProviderAndRouter } from 'src/helpers';

import type { Props } from './search-box-container';
import { SearchBoxContainer } from './search-box-container';

describe('search field container', () => {

	const setup = () => {

		const state: Props = {
			search: {
				value: ''
			},
			categories: {
				list: [],
				currentValue: ''
			},
			sorting: {
				categories: [],
    		currentValue: ''
			},
			onSearchBoxValueUpdate: jest.fn()
		};

		return {state};
	};

	it('renders search box container with the default value', () => {

		const { state } = setup();

		render(
			<WithProviderAndRouter>
				<SearchBoxContainer {...state} />
			</WithProviderAndRouter>
		);

		expect(screen.getByRole('searchbox')).toBeInTheDocument();
		expect(screen.getByPlaceholderText(/Type a book name/)).toHaveValue('');
	});

	it('renders search box container with a custom value', () => {

		const { state } = setup();

		render(
			<WithProviderAndRouter>
				<SearchBoxContainer {...state} />
			</WithProviderAndRouter>
		);

		const searchField = screen.getByRole('searchbox');

		fireEvent.change(searchField, {target: {value: 'jest'}});
		
		expect(state.onSearchBoxValueUpdate).toHaveBeenCalledTimes(1);
		expect(state.onSearchBoxValueUpdate).toHaveBeenCalledWith('jest');
	});

});