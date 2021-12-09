import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { compose } from 'redux';
import { connect } from 'react-redux';

import { categoryValueUpdated } from 'store/actions';

import { useQueryParams } from 'src/hooks';

import Filter, { Record } from 'components/filter';

import type { CategoriesType } from 'store/reducers/categories-reducer';

export type Props = {
	categories: CategoriesType,
	onCategoryUpdate: (value: string) => void
};

export const CategoriesContainer = ({ categories, onCategoryUpdate, ...props }: Props) => {

	const { list } = categories;

	const history = useHistory();
	let location = window.location.href;

	const { searchValue, subjectValue } = useQueryParams(props);

	useEffect(() => {
		location = window.location.href;
		onCategoryUpdate(subjectValue);
	}, [searchValue]);

	const _onCategoryUpdate = (value: string) => {

		onCategoryUpdate(value);

		const url = new URL(location);

		value ? url.searchParams.set('subject', value) : url.searchParams.delete('subject');

		history.push(url.search);
	};

	const renderCategories = ({ label, value }: {label: string, value: string}) => {
		return <Record key={label} label={label} value={value} />
	};

	return (
		<Filter heading="Categories"
						currentValue={subjectValue}
						onChange={_onCategoryUpdate}
		>
			{list.map(renderCategories)}
		</Filter>
	);
};

const mapStateToProps = ({ categories }: Props) => {
	return {categories};
};

const mapDispatchToProps = {
	onCategoryUpdate: categoryValueUpdated
};

export default compose(
									connect(mapStateToProps, mapDispatchToProps),
								)(CategoriesContainer);