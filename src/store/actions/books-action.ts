import { BooksTypes } from '../actionTypes';
import type { BooksAction } from '../reducers/books-reducer';
import type { ExtendedBooksType } from 'src/types';

import { Dispatch, Action } from 'redux';

import { GoogleBooksService } from 'src/services';
import type { ResponsedBooks } from 'src/services/google-books-service';

export const booksRequested = (): BooksAction => {
	return {
		type: BooksTypes.BOOKS_REQUESTED
	};
};

export const booksLoaded = (data: ExtendedBooksType): BooksAction => {
	return {
		type: BooksTypes.BOOKS_REQUEST_SUCCESS,
		payload: data
	};
};

export const booksError = (): BooksAction => {
	return {
		type: BooksTypes.BOOKS_REQUEST_FAILURE
	};
};

export const clearBookList = (): BooksAction => {
	return {
		type: BooksTypes.BOOKS_CLEARED
	};
};

export const searchBooks = ({ search, transformBooks }: GoogleBooksService) =>
	(query: string, subject: string, orderBy: string, startIndex: number) =>
		async (dispatch: Dispatch<Action>): Promise<void> => {

			dispatch(booksRequested());

			try {
				const response: ResponsedBooks = await search(query, subject, orderBy, startIndex);
				let transformedResponse: ExtendedBooksType = {totalItems: 0};

				if (response.totalItems !== 0) {
					transformedResponse = transformBooks(response);
				}

				dispatch( booksLoaded(transformedResponse) );
			} catch (err) {
				dispatch( booksError() );
			}
		};