import booksDataMock from './books-data-mock';
import type { BooksDataMockType } from './books-data-mock';

import { GoogleBooksService } from 'src/services';

export class GoogleBooksServiceMock extends GoogleBooksService {

	protected _makeRequest = async (itemName: BooksDataMockType): Promise<any> => {
		return Promise.resolve(booksDataMock[itemName]);
	};

	public search = (query: string) => {
    return this._makeRequest('books');
	};

	public getBookById = (id: string) => {
		return this._makeRequest('book');
	};

}