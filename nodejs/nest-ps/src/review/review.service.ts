import { Injectable, Inject } from '@nestjs/common';
import { CreateReviewDto } from './dto/create-review.dto';
import { ReviewModel } from './review.model';
import { ModelDefinition } from '@nestjs/mongoose';

@Injectable()
export class ReviewService {
	constructor(@Inject(ReviewModel) private readonly reviewModel: ReviewModel) {}
	async create(dto: CreateReviewDto): Promise<ReviewModel> {
		return Promise.resolve(this.reviewModel.create(dto))
	}
	async update(dto: CreateReviewDto): Promise<ReviewModel> {
		return Promise.resolve(this.reviewModel.create(dto))
	}
	async delete(dto: CreateReviewDto): Promise<DocumentType<ReviewModel> | null> {
		return this.reviewModel.findByIdAndDelete(id).exec();
	}
	async findByProductId(productId: string): Promise<DocumentType<ReviewModel>[]> {
		return this.reviewModel.find({ productId: Types.ObjectId(productId).exec() })
	}
}
