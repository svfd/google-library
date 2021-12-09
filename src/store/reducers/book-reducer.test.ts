import { bookRequested, bookLoaded, bookError, fetchBookById } from '../actions';

import { GoogleBooksServiceMock } from 'mocks/google-books-service-mock';

const googleBooksService = new GoogleBooksServiceMock();

const dispatch = jest.fn();

beforeEach(() => {
	dispatch.mockClear();
});

describe('book reducer', () => {

	const id = '1';

	it('added data to store after success request', async () => {

		const book = googleBooksService.transformBook(await googleBooksService.getBookById(id));

		await fetchBookById(googleBooksService)(id)(dispatch);

		expect(dispatch).toHaveBeenCalledTimes(2);
		expect(dispatch).toHaveBeenNthCalledWith(1, bookRequested());
		expect(dispatch).toHaveBeenNthCalledWith(2, bookLoaded(book));
	});

	it('throw a request error', async () => {

		googleBooksService.getBookById = jest.fn().mockResolvedValue(Promise.reject());

		await fetchBookById(googleBooksService)(id)(dispatch);

		expect(dispatch).toHaveBeenCalledTimes(2);
		expect(dispatch).toHaveBeenNthCalledWith(1, bookRequested());
		expect(dispatch).toHaveBeenNthCalledWith(2, bookError());
	});

});