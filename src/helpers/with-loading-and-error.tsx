import React from 'react';

import Spinner from 'components/spinner';
import ErrorIndicator from 'components/error-indicator';

type Props = {
	loading: boolean,
	error: boolean,
	children: any
};

const WithLoadingAndError = ({ loading, error, children }: Props): JSX.Element => {
	
	if (loading) {
		return <Spinner />;
	}

	if (error) {
		return <ErrorIndicator />;
	}

	return children;
};

export default WithLoadingAndError;