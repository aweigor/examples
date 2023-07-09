import { NextFunction, Request, Response } from 'express';
import { IMiddleware } from './middleware.interface';

export class AuthGuard implements IMiddleware {
	execute({ user }: Request, res: Response, next: NextFunction): void {
		if (user === undefined) {
			res.status(401).send({ error: 'not authorized' });
		} else {
			next();
		}
	}
}
