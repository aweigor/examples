import { Prop } from '@nestjs/mongoose';


export class AuthModel {
	@Prop({ unique: true })
	email: string;

	@Prop()
	passwordHash: string
}
