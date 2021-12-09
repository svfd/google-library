import { SearchBoxTypes } from '../actionTypes';
import type { BaseAction } from 'src/types';

export type SearchBoxType = {
	value: string
};

export type SearchBoxAction = BaseAction<SearchBoxTypes, SearchBoxType>;

const reducer = (state: SearchBoxType, action: SearchBoxAction): SearchBoxType => {

	if (state === undefined) {
		return {
			value: ''
		};
	}

	switch(action.type) {
		case SearchBoxTypes.SEARCH_BOX_VALUE_UPDATED:
			return {
				...state,
				value: action.payload.value
			};
		default:
			return state;
	};

};

export default reducer;