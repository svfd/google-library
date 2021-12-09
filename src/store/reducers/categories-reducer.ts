import { CategoriesTypes } from '../actionTypes';
import type { BaseAction } from 'src/types';

export type CategoriesType = {
	list: {
		label: string,
		value: string
	}[],
	currentValue: string
};

export type CategoriesAction = BaseAction<CategoriesTypes, CategoriesType['currentValue']>;

const reducer = (state: CategoriesType, action: CategoriesAction): CategoriesType => {

	if (state === undefined) {

		return {
			list: [
				{label: 'all', value: ''},
				{label: 'art', value: 'art'},
				{label: 'biography', value: 'biography'},
				{label: 'computers', value: 'computers'},
				{label: 'history', value: 'history'},
				{label: 'medical', value: 'medical'},
				{label: 'poetry', value: 'poetry'},
				{label: 'science', value: 'science'},
				{label: 'comics', value: 'comics'}
			],
			currentValue: '',
		};
	}

		switch(action.type) {
			case CategoriesTypes.CATEGORY_VALUE_UPDATED:
				return {
					...state,
					currentValue: action.payload
				};
			default: 
				return state;
		};
};

export default reducer;