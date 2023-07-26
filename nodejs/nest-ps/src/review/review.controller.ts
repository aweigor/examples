import { Body, Controller, Delete, Post, Get, Param } from '@nestjs/common';
import { ReviewModel } from './review.model';

@Controller('review')
export class ReviewController {
	@Post('create')
	async create(@Body() dto: Omit<ReviewModel, '_id'> ) {

	}

	@Get('byProduct/:productId')
	async getProduct(@Param('productId') productId: string) {

	}

	@Delete(':id')
	async delete(@Param('id') id: string) {

	}
}
