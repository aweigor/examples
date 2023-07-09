import { NextFunction } from 'express';
import { UserRegisterDto } from './dto/user-register.dto';
import { User } from './user.entity';
import { UserLoginDto } from './dto/user-login.dto';
import { UserModel } from '@prisma/client';

export interface IUserService {
	createUser: (dto: UserRegisterDto) => Promise<UserModel | null>;
	register?: (req: Request, res: Response, next: NextFunction) => void;
	validateUser: (dto: UserLoginDto) => Promise<boolean>;
	getUserInfo: (emai: string) => Promise<UserModel | null>;
}
