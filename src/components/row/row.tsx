import React from 'react';

import './row.less';

type Props = {
	left: React.ReactNode,
	right: React.ReactNode
};

const Row = ({ left, right }: Props) => {
	return (
		<section className="row">
			<div className="row-container">
				<div>{left}</div>
				<div>{right}</div>
			</div>
		</section>
	);
};

export default Row;