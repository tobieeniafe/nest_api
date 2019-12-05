import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { ProductsService } from './products.service';
import { Product } from './interfaces/product.interface';


@Controller('products')
export class ProductsController {
	constructor(private readonly productsService: ProductsService){}

	@Get()
	async findAll(): Promise<Product[]> {
		return this.productsService.findAll();
	}

	@Get(':id')
	async findOne(@Param() param): Promise<Product> {
		return this.productsService.findOne(param.id);
	}

	@Post()
	async create(@Body() createProductDto: CreateProductDto): Promise<Product> {
		return this.productsService.create(createProductDto);
	}

	@Delete(':id')
	delete(@Param() param): string {
		return `Deleted product ${param.id}`;
	}

	@Put(':id')
	update(@Body() updateItemDto: CreateProductDto, @Param() param): string {
		return `Update ${param.id} name ${updateItemDto.name}`;
	}
}
 