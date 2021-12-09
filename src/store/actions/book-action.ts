import { BookTypes } from '../actionTypes';
import type { BookAction } from '../reducers/book-reducer';
import type { Book } from 'src/types';

import { Dispatch, Action } from 'redux';

import { GoogleBooksService } from 'src/services';

export const bookRequested = (): BookAction => {
	return {
		type: BookTypes.BOOK_REQUESTED
	};
};

export const bookLoaded = (data: Book): BookAction => {
	return {
		type: BookTypes.BOOK_REQUEST_SUCCESS,
		payload: data
	};
};

export const bookError = (): BookAction => {
	return {
		type: BookTypes.BOOK_REQUEST_FAILURE
	};
};

export const fetchBookById = ({ getBookById, transformBook }: GoogleBooksService) =>
	(id: string) =>
		async (dispatch: Dispatch<Action>): Promise<void> => {
			dispatch(bookRequested());

			try {
				const response = await getBookById(id);
				const transformedResponse = transformBook(response);

				dispatch(bookLoaded(transformedResponse));
			} catch (err) {
				dispatch( bookError() );
			}
		};