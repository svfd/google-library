import React from 'react';
import { useHistory } from 'react-router-dom';

import { compose } from 'redux';
import { connect } from 'react-redux';

import { searchBoxValueUpdated } from 'store/actions';

import { useQueryParams } from 'src/hooks';

import { buildQuery } from 'src/utils';

import Form from 'components/form';
import SearchField from 'components/search-field';

import type { SearchBoxType } from 'src/store/reducers/search-box-reducer';
import type { CategoriesType } from 'store/reducers/categories-reducer';
import type { SortingType } from 'store/reducers/sorting-reducer';

export type Props = {
	search: SearchBoxType,
	categories: CategoriesType,
	sorting: SortingType,
	onSearchBoxValueUpdate: (value: string) => void
};

export const SearchBoxContainer = ({ onSearchBoxValueUpdate, ...props }: Props): React.ReactElement => {

	const history = useHistory();

	const { searchValue, subjectValue, orderValue } = useQueryParams(props);

	const _onFormSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
		evt.preventDefault();

		if (searchValue.trim().length === 0) {
			return;
		}

		const buildedQuery = buildQuery(searchValue, subjectValue, orderValue);

		history.push(buildedQuery);
	};

	return (
		<Form onFormSubmit={_onFormSubmit}>
			<SearchField value={searchValue} 
										onValueChange={onSearchBoxValueUpdate}
			/>
		</Form>
	);
};

const mapStateToProps = ({ search, categories, sorting }: Props) => {
	return {search, categories, sorting};
};

const mapDispatchToProps = {
	onSearchBoxValueUpdate: searchBoxValueUpdated
};

export default compose(
									connect(mapStateToProps, mapDispatchToProps),
								)(SearchBoxContainer);