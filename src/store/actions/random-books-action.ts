import { RandomBooksTypes } from '../actionTypes';
import type { RandomBooksAction } from '../reducers/random-books-reducer';

import { Action, Dispatch } from 'redux';
import { GoogleBooksService } from 'src/services';

export const randomBooksRequested = (): RandomBooksAction => {
	return {
		type: RandomBooksTypes.RANDOM_BOOKS_REQUESTED
	};
};

export const randomBooksLoaded = (data: any): RandomBooksAction => {
	return {
		type: RandomBooksTypes.RANDOM_BOOKS_REQUEST_SUCCESS,
		payload: data
	};
};

export const randomBooksRequestFailure = (): RandomBooksAction => {
	return {
		type: RandomBooksTypes.RANDOM_BOOKS_REQUEST_FAILURE
	};
};

export const fetchRandomBooks = ({ search, transformBooks }: GoogleBooksService) =>
	(query: string) =>
		async (dispatch: Dispatch<Action>): Promise<void> => {

			dispatch(randomBooksRequested());

			try {
				const response = await search(query);
				const transformedResponse = transformBooks(response);

				dispatch(randomBooksLoaded(transformedResponse));
			} catch (err) {
				dispatch(randomBooksRequestFailure());
			}
		};