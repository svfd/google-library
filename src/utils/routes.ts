import {
	SearchPage,
	BookPage,
	HomePage,
	Error404Page
} from 'src/pages';

type Routes = {
	name: string,
	path: string,
	component: React.ComponentType
}[];

const routes: Routes = [
	{
		name: 'search',
		path: '/search',
		component: SearchPage
	},
	{
		name: 'book',
		path: '/book/:id',
		component: BookPage
	},
	{
		name: 'home',
		path: '/',
		component: HomePage
	},
	{
		name: 'error',
		path: '',
		component: Error404Page
	}
];

export default routes;