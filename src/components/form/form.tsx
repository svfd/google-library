import React from 'react';

type Props = {
	onFormSubmit: (evt: React.FormEvent<HTMLFormElement>) => void
	children: React.ReactNode
};

const Form = ({ onFormSubmit, children, ...defaultProps }: Props) => {
	return (
		<form onSubmit={onFormSubmit} {...defaultProps}>
			{children}
		</form>
	);
};

export default Form;