import React, { useEffect, useState } from 'react';
import { bindActionCreators, compose, Dispatch, AnyAction } from 'redux';
import { connect } from 'react-redux';

import { withGoogleBooksService } from 'src/hoc';
import { WithLoadingAndError } from 'src/helpers';

import { fetchRandomBooks } from 'store/actions';

import BookList from 'components/book-list';

import type { GoogleBooksServiceType } from 'src/types';

import type { RandomBooksType } from 'store/reducers/random-books-reducer';

export type Props = {
	randomBooks: RandomBooksType,
	fetchRandomBooks: (randomQuery: string) => void
};

export const RandomBooksContainer = ({ randomBooks, fetchRandomBooks }: Props) => {

	const [ randomQuery, setRandomQuery ] = useState<string | null>(null);

	const { queries } = randomBooks;

	useEffect(() => {
		const randomNumber: number = Math.floor(Math.random() * queries.length);
		const randomQuery: string = queries[randomNumber];
		
		setRandomQuery(randomQuery);
		fetchRandomBooks(randomQuery);
	}, []);

	const { items, loading, error } = randomBooks;

	return (
		<WithLoadingAndError loading={loading} error={error}>
			<h3>Random query: {randomQuery}</h3>
			<BookList bookList={items} />
		</WithLoadingAndError>
	);
};

const mapStateToProps = ({ randomBooks }: Props) => {
	return {randomBooks};
};

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>, { googleBooksService }: GoogleBooksServiceType) => {
	return bindActionCreators({
		fetchRandomBooks: fetchRandomBooks(googleBooksService)
	}, dispatch);
};

export default compose(
									withGoogleBooksService,
									connect(mapStateToProps, mapDispatchToProps)
								)(RandomBooksContainer);