import React, { useEffect, Fragment } from 'react';
import { Redirect } from 'react-router-dom';

import { bindActionCreators, Dispatch, AnyAction, compose } from 'redux';
import { connect } from 'react-redux';

import { searchBooks, clearBookList } from 'store/actions';

import { withGoogleBooksService } from 'src/hoc';
import { useQueryParams } from 'src/hooks';

import ErrorIndicator from 'components/error-indicator';
import Spinner from 'components/spinner';
import BookCounter from 'components/book-counter';
import BookList from 'components/book-list';
import LoadButton from 'components/load-button';

import type { GoogleBooksServiceType } from 'src/types';

import type { BooksType } from 'store/reducers/books-reducer';
import type { CategoriesType } from 'store/reducers/categories-reducer';
import type { SortingType } from 'store/reducers/sorting-reducer';

export type Props = {
	books: BooksType,
	categories: CategoriesType,
	sorting: SortingType,
	searchBooks: (query: string, subject: string, orderBy: string, startIndex?: number) => void,
	onClearBookList: () => void
};

export const BooksContainer = ({ books, searchBooks, onClearBookList, ...props }: Props) => {

	const { items, totalItems, loading, error } = books;

	const { query, subjectValue, orderValue } = useQueryParams(props);

	useEffect(() => {
		onClearBookList();
		searchBooks(query, subjectValue, orderValue);
	}, [query, subjectValue, orderValue]);

	if (!query) {
		return <Redirect to="/" />
	}

	if (error) {
		return <ErrorIndicator />;
	}

	if (totalItems === 0 && loading === false && error === false) {
		return <h1>Books weren't found</h1>
	}

	return (
		<Fragment>
			<BookCounter quantity={totalItems} />
			<BookList bookList={items} />
			{loading && <Spinner />}
			{!loading && totalItems > items.length &&
				<LoadButton text='Load more'
										onLoad={() => searchBooks(query, subjectValue, orderValue, items.length)}
										disabled={loading}
				/>
			}
		</Fragment>
	);
};

const mapStateToProps = ({ books, categories, sorting }: Props) => {
	return {books, categories, sorting};
};

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>, { googleBooksService }: GoogleBooksServiceType) => {
	return bindActionCreators({
		searchBooks: searchBooks(googleBooksService),
		onClearBookList: clearBookList
	}, dispatch);
};

export default compose(
									withGoogleBooksService,
									connect(mapStateToProps, mapDispatchToProps),
								)(BooksContainer);