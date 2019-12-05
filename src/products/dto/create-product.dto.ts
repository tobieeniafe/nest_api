export class CreateProductDto {
	readonly name: string;
	readonly description: string;
	readonly qty: number;
	readonly image?: string;
	readonly price: number;
}