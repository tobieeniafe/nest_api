import { Controller, Post } from '@nestjs/common';

@Controller('login')
export class LoginController {
	@Post()
	create(): any{
		return 'login works';
	}
}
