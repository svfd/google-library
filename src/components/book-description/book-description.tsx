import React from 'react';

type Props = {
	description: string
};

const BookDescription = ({ description, ...props }: Props) => {
	return (
		<p aria-label="book-description" {...props}>{description}</p>
	);
};

export default BookDescription;