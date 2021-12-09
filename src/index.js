import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store';

import { GoogleBooksProvider } from './context';
import { GoogleBooksService } from './services';

import ErrorBoundary from './components/error-boundary';
import App from './components/app';

const googleBooksService = new GoogleBooksService();

ReactDOM.render(
	<ErrorBoundary>
		<Router>
			<Provider store={store}>
				<GoogleBooksProvider value={googleBooksService}>
					<App />
				</GoogleBooksProvider>
			</Provider>
		</Router>
	</ErrorBoundary>,
	document.getElementById('root')
);