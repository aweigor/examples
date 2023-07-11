import { IsBooleanString } from 'class-validator';
import { App } from '../src/app';
import { boot } from '../src//main';
import request from 'supertest';

let application: App;

beforeAll(async () => {
	const { app } = await boot;
});

describe('Users e2e', () => {
	it('Register - error', async () => {
		const res = await request(application.app).post('/users/register').send({
			email: 'test@test.test',
			password: 'test',
		});
		expect(res.statusCode).toBe(422);
	});
});
