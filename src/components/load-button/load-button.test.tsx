import React from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import LoadButton from './load-button';

describe('Load Button', () => {

	const setup = (disabled: boolean = false) => {

		const onLoad = jest.fn();

		render(
			<LoadButton text={'load more'} onLoad={onLoad} disabled={disabled} />
		);

		const loadButton = screen.getByText('load more');

		return {
			onLoad,
			loadButton
		};
	};

	it('renders load button', () => {

		setup();

		expect(screen.getByText(/load more/i)).toBeInTheDocument();
	});

	it('make click on load button', () => {

		const { onLoad, loadButton } = setup();

		userEvent.click(loadButton);

		expect(onLoad).toHaveBeenCalledTimes(1);
	});

	it('renders disabled button', () => {

		const { onLoad, loadButton } = setup(true);

		expect(loadButton).toBeDisabled();

		userEvent.click(loadButton);

		expect(onLoad).not.toHaveBeenCalled();
	});

});