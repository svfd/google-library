import { SortingTypes } from '../actionTypes';
import { SortingAction } from '../reducers/sorting-reducer';

export const sortingTypeUpdated = (newValue: string): SortingAction => {
	return {
		type: SortingTypes.SORTING_TYPE_UPDATED,
		payload: newValue
	};
};