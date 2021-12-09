import React from 'react';

import BookImage from '../book-image';
import BookName from '../book-name';
import BookCategory from '../book-category';
import BookAuthors from '../book-authors';
import BookDescription from '../book-description';

import type { Book } from 'src/types';

import './book-details.less';

type Props = {
	book: Book
};

const BookDetails = ({ book }: Props) => {
	const { thumbnail, title, categories, authors, description, webReaderLink } = book;
	
	return (
		<article className="book-details">
			<div className="book-details-image-wrapper">
				<BookImage path={thumbnail} {...{className: 'book-details-img'}} />
			</div>
			<div className="book-info-wrapper">
				<BookName name={title} {...{className: 'book-details-title'}} />
				{authors && <BookAuthors authors={authors} {...{className: 'book-details-authors'}} />}
				{categories && categories.map((category) => <BookCategory key={category} category={category} {...{className: 'book-details-category'}} />)}
				<BookDescription description={description} {...{className: 'book-details-description'}} />
				<a className="book-details-link" href={webReaderLink} target="_blank" rel="noopener noreferrer">
					View the book content
				</a>
			</div>
		</article>
	);
};

export default BookDetails;