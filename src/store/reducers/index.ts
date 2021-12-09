import { combineReducers } from 'redux';
import booksReducer from './books-reducer';
import bookReducer from './book-reducer';
import sortingReducer from './sorting-reducer';
import categoriesReducer from './categories-reducer';
import searchReducer from './search-box-reducer';
import randomBooksReducer from './random-books-reducer';

const reducer = combineReducers({
	books: booksReducer,
	book: bookReducer,
	sorting: sortingReducer,
	categories: categoriesReducer,
	search: searchReducer,
	randomBooks: randomBooksReducer
});

export default reducer;