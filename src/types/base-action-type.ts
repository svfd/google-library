export type BaseAction<Type, Payload> = {
	type: Type,
	payload?: Payload
};