import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from 'store/reducers';

type Props = {
	children: React.ReactNode
};

const store = createStore(rootReducer);

const WithProviderAndRouter = ({ children }: Props): JSX.Element => {
	return (
		<Provider store={store}>
			<Router>
				{children}
			</Router>
		</Provider>
	)
};

export default WithProviderAndRouter;