import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom'

import { compose } from 'redux';
import { connect } from 'react-redux';


import { sortingTypeUpdated } from 'store/actions';

import { useQueryParams } from 'src/hooks';

import Filter, { Record } from 'components/filter';

import type { SortingType } from 'store/reducers/sorting-reducer';

export type Props = {
	sorting: SortingType,
	onSortingTypeUpdate: (value: string) => void
};

export const SortingContainer = ({ sorting, onSortingTypeUpdate, ...props }: Props) => {

	const { categories } = sorting;

	const history = useHistory();
	let location = window.location.href;

	const { searchValue, orderValue } = useQueryParams(props);

	useEffect(() => {
		location = window.location.href;
		onSortingTypeUpdate(orderValue);
	}, [searchValue]);

	const _onSortingTypeUpdate = (value: string) => {
		
		onSortingTypeUpdate(value);

		let url = new URL(location);

		url.searchParams.set('order', value);
		history.push(url.search);
	};

	const renderCategories = (type: string) => {
		return <Record key={type} label={type} value={type} />
	};

	return (
		<Filter heading="Sorting by"
						currentValue={orderValue}
						onChange={_onSortingTypeUpdate}
		>
			{categories.map(renderCategories)}
		</Filter>
	);
};

const mapStateToProps = ({ sorting }: Props) => {
	return {sorting};
};

const mapDispatchToProps = {
	onSortingTypeUpdate: sortingTypeUpdated
};

export default compose(
								connect(mapStateToProps, mapDispatchToProps),
							)(SortingContainer);