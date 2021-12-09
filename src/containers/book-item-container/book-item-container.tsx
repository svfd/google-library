import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { AnyAction, bindActionCreators, Dispatch, compose } from 'redux';
import { connect } from 'react-redux';

import { fetchBookById } from 'store/actions';

import { withGoogleBooksService } from 'src/hoc';
import { WithLoadingAndError } from 'src/helpers';

import BookDetails from 'components/book-details';

import type { GoogleBooksServiceType } from 'src/types';

import type { BookType } from 'store/reducers/book-reducer';

export type Props = {
	book: BookType,
	fetchBookById: (id: string) => void
}

export const BookItemContainer = ({ book, fetchBookById }: Props) => {

	const { id }: {id: string} = useParams();
	const { loading, error } = book;

	useEffect(() => {
		fetchBookById(id);
	}, [id]);

	return (
		<WithLoadingAndError loading={loading} error={error}>
			<BookDetails book={book} />
		</WithLoadingAndError>
	);
};

const mapStateToProps = ({ book }: Props) => {
	return {book};
};

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>, { googleBooksService }: GoogleBooksServiceType) => {
	return bindActionCreators({
		fetchBookById: fetchBookById(googleBooksService)
	}, dispatch);
}

export default compose(
									withGoogleBooksService,
									connect(mapStateToProps, mapDispatchToProps)
								)(BookItemContainer);