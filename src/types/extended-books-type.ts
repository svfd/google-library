import type { Books } from 'src/types';

export type ExtendedBooksType = {
	items?: Books,
	totalItems: number
};