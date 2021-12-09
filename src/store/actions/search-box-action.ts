import { SearchBoxTypes } from '../actionTypes';
import { SearchBoxAction } from '../reducers/search-box-reducer';

export const searchBoxValueUpdated = (value: string): SearchBoxAction => {
	return {
		type: SearchBoxTypes.SEARCH_BOX_VALUE_UPDATED,
		payload: {value}
	};
};