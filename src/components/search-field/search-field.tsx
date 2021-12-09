import React from 'react';

import './search-field.less';

type Props = {
	value: string
	onValueChange: (value: string) => void
};

const SearchField = ({ value, onValueChange }: Props) => {
	return (
		<input className="search-field"
						type="search"
						placeholder="Type a book name"
						value={value}
						onChange={(evt) => onValueChange(evt.target.value)}
						required
		/>
	);
};

export default SearchField;