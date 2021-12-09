import { BooksTypes } from '../actionTypes';
import type { ExtendedBooksType, BaseAction } from 'src/types';
import { Reducer } from 'redux';

export type BooksType = ExtendedBooksType & {
	loading: boolean | null,
	error: boolean
};

export type BooksAction = BaseAction<BooksTypes, ExtendedBooksType>;

type BooksActionWithState = BaseAction<BooksTypes, BooksType>;

const addBooks = (state: BooksType, books: BooksType['items']) => {
	return [
		...state.items,
		...books ?? []
	];
};

const reducer: Reducer = (state: BooksType, action: BooksActionWithState): BooksType => {

	if (state === undefined) {
		return {
			items: [],
			totalItems: 0,
			loading: null,
			error: false
		};
	}

	switch(action.type) {
		case BooksTypes.BOOKS_REQUESTED:
			return {
				...state,
				loading: true,
				error: false
			};
		case BooksTypes.BOOKS_REQUEST_SUCCESS:
			return {
				...state,
				items: addBooks(state, action.payload.items),
				totalItems: action.payload.totalItems,
				loading: false,
				error: false
			};
		case BooksTypes.BOOKS_CLEARED:
			return {
				...state,
				items: []
			};
		case BooksTypes.BOOKS_REQUEST_FAILURE:
			return {
				...state,
				loading: false,
				error: true
			};
		default:
			return state;
	}
};

export default reducer;