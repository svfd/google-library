import React from 'react';
import { Link } from 'react-router-dom';

import error404img from 'assets/images/404-page.png';
import './error-404.less';

const Error404 = () => {
	return (
		<section className="error-404">
			<div className="container">
				<img src={error404img} alt="Page is not found" className="error-404-img" width="150" height="200" />
				<Link className="error-404-link" to="/">Go to home page</Link>
			</div>
		</section>
	)
}

export default Error404;