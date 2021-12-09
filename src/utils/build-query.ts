type Query = [
	query: string,
	subject?: string,
	order?: string
];

const buildQuery = (...params: Query): string => {

	const [ query, subject, order ] = params;

	const _subject = subject ? `&subject=${subject}` : '';
	const _order = order ? `&order=${order}` : '';

	return `/search?q=${query}${_subject}${_order}`;
};

export default buildQuery;