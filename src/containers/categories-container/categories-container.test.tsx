import React from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import { WithProviderAndRouter } from 'src/helpers';

import type { Props } from './categories-container';
import { CategoriesContainer } from './categories-container';

describe('categories container', () => {

	const setup = () => {

		const state: Props = {
			categories: {
				list: [
					{label: 'all', value: ''},
					{label: 'art', value: 'art'},
					{label: 'biography', value: 'biography'},
					{label: 'computers', value: 'computers'},
					{label: 'history', value: 'history'},
					{label: 'medical', value: 'medical'},
					{label: 'poetry', value: 'poetry'}
				],
				currentValue: '',
			},
			onCategoryUpdate: jest.fn()
		};

		return {state};
	};

	it('render categories container', () => {

		const { state } = setup();

		render(
			<WithProviderAndRouter>
				<CategoriesContainer {...state} />
			</WithProviderAndRouter>
		);

		const select = screen.getByRole('combobox');

		userEvent.selectOptions(select, 'computers');

		expect(state.onCategoryUpdate).toHaveBeenCalledTimes(2);
		expect(state.onCategoryUpdate).toHaveBeenCalledWith('computers');
	});

});