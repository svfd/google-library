import React from 'react';

import BookImage from 'components/book-image';
import BookCategory from 'components/book-category';
import BookAuthors from 'components/book-authors';
import BookName from 'components/book-name';

import { routeBuilder, routesMap } from 'src/utils';

import type { Book } from 'src/types';

import './book-list-item.less';

type Props = {
	book: Book
};

const BookListItem = ({ book }: Props) => {
	const { id, thumbnail, title, categories, authors } = book;
	
	return (
		<article className="book-item">
			<BookImage path={thumbnail} {...{alt: title, className: 'book-img'}} />
			<BookName name={title} path={routeBuilder(routesMap.book, {id})} {...{className: 'book-title'}} />
			{authors && <BookAuthors authors={authors} {...{className: 'book-authors'}} />}
			{categories && categories.map((category) => <BookCategory key={category} category={category} />)}
		</article>
	);
};

export default BookListItem;