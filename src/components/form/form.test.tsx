import React from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import Form from './form';

describe('form component', () => {

	const setup = () => {

		const onFormSubmit = jest.fn((evt) => evt.preventDefault());

		render(
			<Form onFormSubmit={onFormSubmit}>
				<input type="text" />
				<button>Send</button>
			</Form>
		);

		const textField = screen.getByRole('textbox');
		const button = screen.getByRole('button');

		return {
			onFormSubmit,
			textField,
			button
		};
	};

	it('renders form', () => {

		const { textField, button } = setup();

		expect(textField).toBeInTheDocument();
		expect(button).toBeInTheDocument();
	});

	it('sends form', () => {

		const { textField, button, onFormSubmit } = setup();

		userEvent.type(textField, 'something text');
		userEvent.click(button);

		expect(onFormSubmit).toHaveBeenCalled();
	});

});