import type { ExtendedBooksType, Books, Book } from 'src/types';

type Search = [
	query: string,
	subject?: string,
	orderBy?: string,
	startIndex?: number
];

export type ResponsedBooks = {
	totalItems: number,
	items?: Array<ResponsedBook>
};

export type ResponsedBook = {
	id: string,
	etag: string,
	selfLink: string,
	volumeInfo: {
		title: string,
		authors: string[],
		description: string,
		categories: [],
		imageLinks: {
			thumbnail: string
		},
	},
	accessInfo: {
		webReaderLink: string
	}
};

export class GoogleBooksService {
	
	private _baseUrl: string = 'https://www.googleapis.com/books/v1/';
	private _maxResult: number = 20;

	protected _makeRequest = async <T>(url: string): Promise<T> => {
		try {
			const response = await fetch(this._baseUrl + url);

			if (response.ok) {
				return await response.json();
			}

		} catch(err) {
			throw new Error(err);
		}
	};

	public transformBooks = (books: ResponsedBooks): ExtendedBooksType => {

		const bookList: Books = books.items.map(this.transformBook);

		return {
			items: bookList,
			totalItems: books.totalItems
		};
	};

	public transformBook = (book: ResponsedBook): Book => {

		const description = book.volumeInfo.description ? book.volumeInfo.description.replace(/\<\/?[a-z]+\>/gi, '') : '';

		return {
			id: book.id,
			etag: book.etag,
			title: book.volumeInfo.title,
			authors: book.volumeInfo.authors,
			description,
			categories: book.volumeInfo.categories,
			thumbnail: book.volumeInfo.imageLinks?.thumbnail,
      webReaderLink: book.accessInfo.webReaderLink,
			selfLink: book.selfLink
		};
	};

	private _buildSubject = (subject: string) => subject ? `+subject:${subject}` : '';

	private _buildOrderBy = (orderBy: string) => orderBy ? `&orderBy=${orderBy}` : '';

	private _buildStartIndex = (startIndex: number) => startIndex ? `&startIndex=${startIndex}` : '';

	private _buildMaxResult = () => `&maxResults=${this._maxResult}`;

	private _buildQueryString = (args: Search): string => {
		const [ query, subject, orderBy, startIndex ] = args;

		const _subject: string = this._buildSubject(subject);
		const _orderBy: string = this._buildOrderBy(orderBy);
		const _startIndex: string = this._buildStartIndex(startIndex);
		const _maxResult: string = this._buildMaxResult();

		return `volumes?q=${query}${_subject}${_orderBy}${_startIndex}${_maxResult}`;
	};

	public search = (...args: Search): Promise<ResponsedBooks> => {
		const query: string = this._buildQueryString(args);
		return this._makeRequest<ResponsedBooks>(query);
	};

	public getBookById = (id: string): Promise<ResponsedBook> => {
		return this._makeRequest<ResponsedBook>(`volumes/${id}`);
	};

}