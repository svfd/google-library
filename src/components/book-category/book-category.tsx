import React from 'react';

type Props = {
	category: string
};

const BookCategory = ({ category, ...defaultProps }: Props) => {
	return (
		<span aria-label="book category" {...defaultProps}>{category}</span>
	);
};

export default BookCategory;