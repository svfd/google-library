import { urlSearchValues } from './index';

type Params = {
	query: string | null,
	subject: string | null,
	order: string | null
};

const getUrlParams = (location: string): Params => {

	const searchParams = new URLSearchParams(location);

	const query = searchParams.get(urlSearchValues.query);
	const subject = searchParams.get(urlSearchValues.subject);
	const order = searchParams.get(urlSearchValues.order);

	return {
		query,
		subject,
		order
	};

};

export default getUrlParams;