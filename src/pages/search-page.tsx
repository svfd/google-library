import React from 'react';

import CategoriesContainer from 'containers/categories-container';
import SortingContainer from 'containers/sorting-container';
import BooksContainer from 'src/containers/books-container';

import Row from 'components/row';

const SearchPage = () => {
	return (
		<main>
			<div className="container">
				<Row left={<CategoriesContainer />}
							right={<SortingContainer />}
				/>
				<BooksContainer />
			</div>
		</main>
	);
};

export default SearchPage;