import { RandomBooksTypes } from '../actionTypes';
import type { Books, BaseAction } from 'src/types';

export type RandomBooksType = {
	items: Books,
	queries: string[],
	loading: boolean,
	error: boolean
};

export type RandomBooksAction = BaseAction<RandomBooksTypes, RandomBooksType>;

const reducer = (state: RandomBooksType, action: RandomBooksAction): RandomBooksType => {

	if (state === undefined) {
		return {
			items: [],
			queries: ['IT', 'Math', 'Operating system', 'Cooking', 'Learning'],
			loading: false,
			error: false
		};
	}

	switch(action.type) {
		case RandomBooksTypes.RANDOM_BOOKS_REQUESTED:
			return {
				...state,
				loading: true,
				error: false
			};
		case RandomBooksTypes.RANDOM_BOOKS_REQUEST_SUCCESS:
			return {
				...state,
				items: action.payload.items,
				loading: false,
				error: false
			};
		case RandomBooksTypes.RANDOM_BOOKS_REQUEST_FAILURE:
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