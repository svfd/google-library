import React from 'react';
import { Link } from 'react-router-dom';

type Props = {
	name: string,
	path?: string
};

const BookName = ({ name, path, ...defaultProps }: Props) => {

	const bookName = <h4 {...defaultProps}>{name}</h4>;

	if (path) {
		return (
			<Link className="book-link" to={path}>
				{bookName}
			</Link>
		);
	}

	return bookName;
};

export default BookName;