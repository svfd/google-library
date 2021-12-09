const routeBuilder = (name: string, option: any): string => {

	for (let key in option) {
		return name.replace(`:${key}`, option[key]);
	}

};

export default routeBuilder;