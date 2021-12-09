import React, { Fragment } from 'react';

import './filter.less';

type Props = {
	heading: string,
	currentValue: string
	children: React.ReactNode,
	onChange: (value: string) => void
};

type RecordProps = {
	label: string,
	value: string
};

export const Record = ({ label, value}: RecordProps) => {
	return <option value={value}>{label}</option>;
};

const Filter = ({ heading, currentValue, children, onChange }: Props) => {
	return (
		<Fragment>
			<label className="filter-label" htmlFor={heading}>{heading}</label>
			<select id={heading}
							value={currentValue}
							onChange={(evt) => onChange(evt.target.value)}
			>
				{React.Children.map(children, (child: React.ReactElement) => {
					 return React.cloneElement(child);
				})}
			</select>
		</Fragment>
	);
};

export default Filter;