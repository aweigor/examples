import { Body, Controller, Delete, Post, Get, Param, HttpException, HttpStatus } from '@nestjs/common';
import { ReviewModel } from './review.model';
import { CreateReviewDto } from './dto/create-review.dto';
import { REVIEW_NOT_FOUND } from './review.constants';

@Controller('review')
export class ReviewController {
	constructor(private readonly reviewService: ReviewService) {}

	@Post('create')
	async create(@Body() dto: CreateReviewDto ) {
		this.reviewService.create(dto);
	}

	@Get('byProduct/:productId')
	async getProduct(@Param('productId') productId: string) {
		return this.reviewService.findByProductId(productId);
	}

	@Delete(':id')
	async delete(@Param('id') id: string) {
		const deletedDoc = await this.reviewService.delete(id);
		if(!deletedDoc) {
			throw new HttpException(REVIEW_NOT_FOUND, HttpStatus.NOT_FOUND);
		}
	}
}
