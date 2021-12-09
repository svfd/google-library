import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import PageHeader from '../page-header';

import { routes } from 'src/utils';

import 'normalize.css';
import 'assets/less/main.less';

const App = () => {

	const renderRoute = ({ path, component }: {path: string, component: React.ComponentType}) => {
		return (
			<Route key={path} path={path} component={component} exact />
		);
	};

	return (
		<Fragment>
			<PageHeader />
			<Switch>
				{routes.map(renderRoute)}
			</Switch>
		</Fragment>
	);
};

export default App;