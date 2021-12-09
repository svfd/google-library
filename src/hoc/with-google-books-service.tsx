import React from 'react';
import { GoogleBooksConsumer } from 'src/context';
import { GoogleBooksService } from 'src/services';

const withGoogleBooksService = (View: React.ComponentType): React.ComponentType => {
	return (props: any) => {
		return (
			<GoogleBooksConsumer>
				{(googleBooksService: GoogleBooksService) => {
					return (
						<View googleBooksService={googleBooksService}
									{...props}
						/>
					);
				}}
			</GoogleBooksConsumer>
		)
	}
};

export default withGoogleBooksService;