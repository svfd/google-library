import { randomBooksRequested, randomBooksLoaded, randomBooksRequestFailure, fetchRandomBooks } from '../actions';

import { GoogleBooksServiceMock } from 'mocks/google-books-service-mock';

const googleBooksService = new GoogleBooksServiceMock();

const dispatch = jest.fn();

beforeEach(() => {
	dispatch.mockClear();
});

describe('random books reducer', () => {

	const query = 'jest';

	it('added books to the store', async () => {

		const books = googleBooksService.transformBooks(await googleBooksService.search(query));

		await fetchRandomBooks(googleBooksService)(query)(dispatch);

		expect(dispatch).toHaveBeenCalledTimes(2);
		expect(dispatch).toHaveBeenNthCalledWith(1, randomBooksRequested());
		expect(dispatch).toHaveBeenNthCalledWith(2, randomBooksLoaded(books));
	});

	it('fetched books with an error', async () => {

		googleBooksService.search = jest.fn().mockResolvedValue(Promise.reject());

		await fetchRandomBooks(googleBooksService)(query)(dispatch);

		expect(dispatch).toHaveBeenCalledTimes(2);
		expect(dispatch).toHaveBeenNthCalledWith(1, randomBooksRequested());
		expect(dispatch).toHaveBeenNthCalledWith(2, randomBooksRequestFailure());
	});

});