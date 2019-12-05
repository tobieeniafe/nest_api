import { Controller, Get, Post, Put, Body, Param } from '@nestjs/common';
import { LoginUserDto } from './dto/login-user.dto';
import { RegisterUserDto } from './dto/register-user.dto';
import { UserService } from './user.service';
import { User } from './interfaces/user.interface';


@Controller('user')
export class UserController {
	constructor(private readonly userService: UserService){}

	@Post('/register')
	create(@Body() registerUserDto: RegisterUserDto): Promise<User> {
		return this.userService.registerUser(registerUserDto);
	}

	@Put('/update')
	update(@Body() updateUserDto: RegisterUserDto): Promise<User> {
		return this.userService.updateUserDetails(updateUserDto._id, updateUserDto);
	}

	@Get('/details/:id')
	findOne(@Param() param): Promise<User>{
		return this.userService.getUserById(param.id);
	}

}
