import { Prop } from '@nestjs/mongoose';

class ProductCharacteristic {
	@Prop()
	name: string;
	@Prop()
	value: string;
}

export class ProductModel {
	@Prop()
	image: string;
	@Prop()
	title: string;
	@Prop()
	price: number;
	@Prop()
	oldPrice: number;
	@Prop()
	credit: number;
	@Prop()
	calculateRating: number;
	@Prop()
	description: string;
	@Prop()
	advantages: string;
	@Prop()
	disadvantages: string;
	@Prop({ type: () => [String] })
	categories: string[];
	@Prop({ type: () => [String] })
	tags: string;
	@Prop({ type: () => [ProductCharacteristic], _id: false })
	characteristics: ProductCharacteristic[];
}