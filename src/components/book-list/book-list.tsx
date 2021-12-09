import React from 'react';
import BookListItem from '../book-list-item';

import type { Books, Book } from 'src/types';

import './book-list.less';

type Props = {
	bookList: Books;
};

const BookList = ({ bookList, ...props }: Props) => {

	const renderBooks = (book: Book) => <BookListItem key={book.etag} book={book} {...props} />;

	return (
		<section className="book-list">
			<div className="book-list-wrapper">
				{bookList.map(renderBooks)}
			</div>
		</section>
	);
};

export default BookList;