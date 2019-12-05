import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { ProductsService } from './products.service';
import { Product } from './interfaces/product.interface';


@Controller('products')
export class ProductsController {
	constructor(private readonly productsService: ProductsService){}

	@Get()
	findAll(): Promise<Product[]> {
		return this.productsService.findAll();
	}

	@Get(':id')
	findOne(@Param() param): Promise<Product> {
		return this.productsService.findOne(param.id);
	}

	@Post()
	create(@Body() createProductDto: CreateProductDto): Promise<Product> {
		return this.productsService.create(createProductDto);
	}

	@Delete(':id')
	delete(@Param() param): Promise<Product> {
		return this.productsService.delete(param.id);
	}

	@Put(':id')
	update(@Body() updateItemDto: CreateProductDto, @Param() param): Promise<Product> {
		return this.productsService.update(param.id, updateItemDto);
	}
}
 