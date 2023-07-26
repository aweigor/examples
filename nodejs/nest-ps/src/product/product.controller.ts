import { Body, HttpCode, Controller, Post, Get, Delete, Param, Patch } from '@nestjs/common';
import { ProductModel } from './product.model';
import { ProductModule } from './product.module';
import { FindProductDto } from './dto/find.product.dto';

@Controller('product')
export class ProductController {

	@Post('create')
	async create(@Body() dto: Omit<ProductModel, '_id'>) {

	}

	@Get(':id')
	async get(@Param('id') id: string) {

	}

	@Delete(':id')
	async delete(@Param('id') id: string) {

	}

	@Patch(':id')
	async patch(@Param('id') id: string, @Body() dto: ProductModule) {

	}

	@HttpCode(200)
	@Post()
	async find(@Body() dto: FindProductDto) {

	}
}
