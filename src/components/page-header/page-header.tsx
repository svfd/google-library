import React from 'react';
import { Link } from 'react-router-dom';

import SearchBoxContainer from 'src/containers/search-box-container';

import { routesMap } from 'src/utils';

import './page-header.less';

const PageHeader = () => {
	return (
		<header className="page-header">
			<div className="container">
				<div className="page-header-wrapper">
					<h3 className="app-name" aria-label="app name">
						<Link className="page-header-link" to={routesMap.home}>Google Library</Link>
					</h3>
					<SearchBoxContainer />
				</div>
			</div>
		</header>
	);
};

export default PageHeader;