import React from 'react';

import RandomBooksContainer from 'containers/random-books-container';

const HomePage = () => {
	return (
		<main>
			<div className="container">
				<RandomBooksContainer />
			</div>
		</main>
	);
};

export default HomePage;