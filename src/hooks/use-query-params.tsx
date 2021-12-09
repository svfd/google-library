import { useLocation } from 'react-router-dom';
import { getUrlParams } from 'src/utils';

import type { SearchBoxType } from 'src/store/reducers/search-box-reducer';
import type { CategoriesType } from 'store/reducers/categories-reducer';
import type { SortingType } from 'store/reducers/sorting-reducer';

type QueryProps = {
	search?: SearchBoxType,
	categories?: CategoriesType,
	sorting?: SortingType
};

const useQueryParams = (props: QueryProps) => {

	const { search: location } = useLocation();

	const searchValue = props?.search?.value || '';
	const categoryValue = props?.categories?.currentValue || '';
	const sortingValue = props?.sorting?.currentValue || '';

	const { query, subject, order } = getUrlParams(location);

	const subjectValue = subject ?? categoryValue;
	const orderValue = order ?? sortingValue;

	return {
		searchValue,
		subjectValue,
		orderValue,
		query
	};

};

export default useQueryParams;