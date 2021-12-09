import React from 'react';

type Props = {
	authors: string[]
};

const BookAuthors = ({ authors, ...defaultProps }: Props) => {
	return (
		<span aria-label="book authors" {...defaultProps}>{authors.join(', ')}</span>
	);
};

export default BookAuthors;