import { NextFunction } from 'express';
import { UserRegisterDto } from './dto/user-register.dto';
import { User } from './user.entity';
import { UserLoginDto } from './dto/user-login.dto';

export interface IUserService {
	createUser: (dto: UserRegisterDto) => Promise<User | null>;
	register?: (req: Request, res: Response, next: NextFunction) => void;
	validateUser: (dto: UserLoginDto) => Promise<boolean>;
}
