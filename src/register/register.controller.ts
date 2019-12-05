import { Controller, Post } from '@nestjs/common';

@Controller('register')
export class RegisterController {
	@Post()
	create(): any {
		return 'register works';
	}
}
