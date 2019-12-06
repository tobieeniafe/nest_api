import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose'; 
import { Model } from 'mongoose';
import { User } from './interfaces/user.interface';

@Injectable()
export class UserService {
	constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

	async registerUser(user: User): Promise<any>{
		const already_registered = await this.userModel.findOne({email:user.email});
		if (already_registered) {
			return {status: false, message: 'email already in use'}
		}
		const newUser = new this.userModel(user);
		return await newUser.save();
	}

	async updateUserDetails(id: string, user: User): Promise<User>{
		return await this.userModel.findOneAndUpdate(id, user);
	}

	async getUserById(id: string): Promise<User>{
		return await this.userModel.findById(id);
	}

	async getUserByEmail(email: string): Promise<User>{
		return await this.userModel.findOne({email:email});
	}
}
