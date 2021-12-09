import React from 'react';

type Props = {
	quantity: number
};

const BookCounter = ({ quantity }: Props) => {
	return (
		<p>
			Total books: <span aria-label="books count">{quantity}</span>
		</p>
	);
};

export default BookCounter;