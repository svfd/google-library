import React from 'react';

import BookItemContainer from 'containers/book-item-container';

const BookPage = () => {
	return (
		<main>
			<div className="container">
				<BookItemContainer />
			</div>
		</main>
	);
};

export default BookPage;