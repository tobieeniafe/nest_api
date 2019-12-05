export class RegisterUserDto {
	readonly _id?: string;
	readonly firstname: string;
	readonly lastname: string;
	readonly email: string;
	readonly password: string;
	readonly address: string;
	readonly postalcode: string;
	readonly city: string;
	readonly country: string;
	readonly avatar: string;
}