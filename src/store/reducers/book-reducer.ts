import { BookTypes } from '../actionTypes';
import type { Book, BaseAction } from 'src/types';

export type BookType = Book & {
	loading: boolean,
	error: boolean
};

export type BookAction = BaseAction<BookTypes, Book>;

const reducer = (state: BookType, action: BookAction): BookType => {

	if (state === undefined) {
		return <BookType> {
			id: '0',
			thumbnail: '',
			title: '',
			categories: [],
			authors: [],
			description: '',
			webReaderLink: '',
			loading: false,
			error: false
		};
	}

	switch(action.type) {
		case BookTypes.BOOK_REQUESTED:
			return {
				...state,
				loading: true,
				error: false
			};
		case BookTypes.BOOK_REQUEST_SUCCESS:
			return {
				...state,
				id: action.payload.id,
				thumbnail: action.payload.thumbnail,
				title: action.payload.title,
				categories: action.payload.categories,
				authors: action.payload.authors,
				description: action.payload.description,
				webReaderLink: action.payload.webReaderLink,
				loading: false,
				error: false
			};
		case BookTypes.BOOK_REQUEST_FAILURE:
			return {
				...state,
				loading: false,
				error: true
			};
		default:
			return state;
	}

};

export default reducer;