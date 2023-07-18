import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDocument, User } from './models/user.model';


@Injectable()
export class UserService {
	constructor(
		@InjectModel(User.name) private userModel: Model<UserDocument>
	) {}

	async getByEmail(email: string) {
		return this.userModel.findOne({ email })
	}

	async createUser({ email, password }: { email: string, password: string }) {
		const newUser = new this.userModel({ email, password });
		return newUser.save();
	}
}