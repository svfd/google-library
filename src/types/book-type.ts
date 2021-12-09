export type Book = {
	id: string,
	etag: string,
	thumbnail: string,
	title: string,
	categories: string[],
	authors: string[],
	description: string,
	webReaderLink: string,
	selfLink: string
};