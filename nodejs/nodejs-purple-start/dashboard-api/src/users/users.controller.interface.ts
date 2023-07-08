import { NextFunction, Request, Response } from 'express';
import { UserRegisterDto } from './dto/user-register.dto';
import { UserLoginDto } from './dto/user-login.dto';

export interface IUserController {
	login(req: Request<{}, {}, UserLoginDto>, res: Response, next: NextFunction): Promise<void>;
	register(
		{ body }: Request<{}, {}, UserRegisterDto>,
		res: Response,
		next: NextFunction,
	): Promise<void>;
}
