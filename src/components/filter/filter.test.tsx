import React from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom'

import Filter, { Record } from './filter';

describe('filter component', () => {

	const setup = () => {

		const onFilterChange = jest.fn();

		render(
			<Filter heading="testing libraries" currentValue="react testing library" onChange={onFilterChange}>
				<Record label="react testing library" value="react testing library" />
				<Record label="jest" value="jest" />
			</Filter>
		);

		const label = screen.getByText('testing libraries');
		const select = screen.getByRole('combobox');
		const option = screen.getAllByRole('option');

		return {
			onFilterChange,
			label,
			select,
			option
		};
	};

	it('renders filter', () => {

		const { label, select, option } = setup();

		expect(label).toBeInTheDocument();
		expect(select).toBeInTheDocument();
		expect(option).toHaveLength(2);

		expect(label).toHaveTextContent('testing libraries');
		expect(select).toHaveValue('react testing library');
	});

	it('changes filter value', () => {

		const { onFilterChange, select } = setup();

		userEvent.selectOptions(select, 'jest');

		expect(onFilterChange).toHaveBeenCalledTimes(1);
		expect(onFilterChange).toHaveBeenCalledWith('jest');
	});

});