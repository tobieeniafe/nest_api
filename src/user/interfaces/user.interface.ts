export interface User {
	id?: string; //question mark means its optional
	firstname: string;
	lastname: string;
	email: string;
	password: string;
	address: string;
	postalcode: string;
	city: string;
	country: string;
	avatar: string;
}