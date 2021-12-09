import React from 'react';

import errorIndicator from 'assets/images/error-indicator.svg';
import './error-indicator.less';

const ErrorIndicator = () => {
	return (
		<div className="error-indicator">
			<img className="error-indicator-img" src={errorIndicator} width="100" height="150" alt='error indicator' />
			<p className="error-indicator-text">Request error</p>
		</div>
	);
};

export default ErrorIndicator;