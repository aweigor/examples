import { IsEmail, IsString } from 'class-validator';

export class UserLoginDto {
	@IsEmail({}, { message: 'wrong email' })
	email: string;

	@IsString({ message: 'wrong password' })
	password: string;
}
