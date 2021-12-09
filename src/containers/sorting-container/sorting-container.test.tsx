import React from 'react';

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

import { WithProviderAndRouter } from 'src/helpers';

import type { Props } from './sorting-container';
import { SortingContainer } from './sorting-container';

describe('sorting container', () => {

	const setup = () => {

		const state: Props = {
			sorting: {
				categories: ['relevance', 'newest'],
				currentValue: 'relevance'
			},
			onSortingTypeUpdate: jest.fn()
		};

		return {state};
	};

	it('renders sorting container', () => {

		const { state } = setup();
		
		render(
			<WithProviderAndRouter>
				<SortingContainer {...state} />
			</WithProviderAndRouter>
		);

		const select = screen.getByRole('combobox');

		expect(select).toHaveValue(state.sorting.currentValue);

		userEvent.selectOptions(select, 'newest');

		expect(state.onSortingTypeUpdate).toHaveBeenCalledTimes(2);
		expect(state.onSortingTypeUpdate).toHaveBeenCalledWith('newest');
	});

});