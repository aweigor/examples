import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Post, PostSchema } from './models/post.model';
import { User, UserSchema } from './models/user.model';

@Module({
	providers: [UsersModule],
	imports: [
		MongooseModule.forFeature([
			{ name: User.name, schema: UserSchema },
			{ name: Post.name, schema: PostSchema },
		])
	]
})
export class UsersModule {}
