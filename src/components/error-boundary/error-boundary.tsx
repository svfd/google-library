import React, { Component } from 'react';

import ErrorIndicator from '../error-indicator';

type Props = {
	children: React.ReactElement;
};

type State = {
	hasError: boolean;
};

class ErrorBoundry extends Component<Props, State> {

	state: State = {
		hasError: false
	};

	componentDidCatch(): void {
		this.setState({hasError: true});
	}

	render() {

		if (this.state.hasError) {
			return <ErrorIndicator />
		}

		return this.props.children;
	}

}

export default ErrorBoundry;