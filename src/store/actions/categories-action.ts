import { CategoriesTypes } from '../actionTypes';
import type { CategoriesAction } from '../reducers/categories-reducer';

export const categoryValueUpdated = (newValue: string): CategoriesAction => {
	return {
		type: CategoriesTypes.CATEGORY_VALUE_UPDATED,
		payload: newValue
	};
};