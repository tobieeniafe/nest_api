export interface Product {
	id?: string; //question mark means its optional
	name: string;
	description?: string;
	qty: number;
	price: number;
}