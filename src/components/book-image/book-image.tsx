import React from 'react';

import bookCoverMock from 'assets/images/book-cover-mock.png';

type Props = {
	path: string
};

const BookImage = ({ path = bookCoverMock, ...defaultProps }: Props) => {
	return (
		<img src={path} width="100" height="150" {...defaultProps} alt="book cover" />
	);
};

export default BookImage;