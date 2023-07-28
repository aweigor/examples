import { Prop } from '@nestjs/mongoose';
import { Types } from 'mongoose';

export class ReviewModel {
	@Prop()
	_id: string;
	@Prop()
	name: string;
	@Prop()
	title: string;
	@Prop()
	description: string;
	@Prop()
	rating: number;
	@Prop()
	createdAt: Date;
	@Prop()
	productId: Types.ObjectId;
	create(any) {

	}
}
