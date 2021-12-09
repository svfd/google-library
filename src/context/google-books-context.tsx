import { createContext } from 'react';

const {
	Provider: GoogleBooksProvider,
	Consumer: GoogleBooksConsumer
} = createContext(undefined);

export {
	GoogleBooksProvider,
	GoogleBooksConsumer
};