import { booksRequested, booksLoaded, booksError, searchBooks } from '../actions';

import { GoogleBooksServiceMock } from 'mocks/google-books-service-mock';

const googleBooksService = new GoogleBooksServiceMock();

const dispatch = jest.fn();

beforeEach(() => {
	dispatch.mockClear();
});

describe('books reducer', () => {

	const query = 'jest';
	const subject = '';
	const orderBy = '';
	const startIndex = 0;

	it('added books to store after a request', async () => {

		const books = googleBooksService.transformBooks(await googleBooksService.search(''));

		await searchBooks(googleBooksService)(query, subject, orderBy, startIndex)(dispatch);

		expect(dispatch).toHaveBeenCalledTimes(2);
		expect(dispatch).toHaveBeenNthCalledWith(1, booksRequested());
		expect(dispatch).toHaveBeenNthCalledWith(2, booksLoaded(books));
	});

	it('throw a request error', async () => {
		
		googleBooksService.search = jest.fn().mockResolvedValue(Promise.reject());

		await searchBooks(googleBooksService)(query, subject, orderBy, startIndex)(dispatch);

		expect(dispatch).toHaveBeenCalledTimes(2);
		expect(dispatch).toHaveBeenNthCalledWith(1, booksRequested());
		expect(dispatch).toHaveBeenNthCalledWith(2, booksError());
	});

});