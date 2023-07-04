import { IsEmail, IsString } from 'class-validator';

export class UserRegisterDto {
	@IsEmail({}, { message: 'wrong email' })
	email: string;

	@IsString({ message: 'wrong password' })
	password: string;

	@IsString({ message: 'wrong name' })
	name: string;
}
