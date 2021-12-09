import routes from './routes';

const routesMap: any = {};

routes.forEach(({ name, path }): void => {
	routesMap[name] = path;
});

export default routesMap;