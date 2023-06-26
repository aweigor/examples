/* eslint-disable */

import 'reflect-metadata';

function Injectable(key: string) {
	return (target: Function) => {
		Reflect.defineProperty(target, key, 1);
		const meta = Reflect.getOwnPropertyDescriptor(target, key);
		console.log(meta);
	};
}

function Inject(key: string) {
	return (target: Function) => {
		Reflect.defineProperty(target, key, 1);
		const meta = Reflect.getOwnPropertyDescriptor(target, key);
		console.log(meta);
	};
}

function Prop(target: Object, neme: string) {}

@Injectable('C')
export class C {
	@Prop prop?: number;
}

@Injectable('D')
export class D {
	constructor(@Inject('C') c: C) {}
}
