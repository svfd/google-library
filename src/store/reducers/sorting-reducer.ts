import { SortingTypes } from '../actionTypes';
import type { BaseAction } from 'src/types';

export type SortingType = {
	categories: string[],
	currentValue: string
};

export type SortingAction = BaseAction<SortingTypes, SortingType['currentValue']>;

const reducer = (state: SortingType, action: SortingAction): SortingType => {

	if (state === undefined) {
		return {
			categories: ['relevance', 'newest'],
			currentValue: 'relevance'
		};
	}

	switch(action.type) {
		case SortingTypes.SORTING_TYPE_UPDATED:
			return {
				...state,
				currentValue: action.payload
			};
		default:
			return state;
	}
};

export default reducer;