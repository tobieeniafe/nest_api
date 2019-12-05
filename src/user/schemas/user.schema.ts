import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  name: String,
  email: String,
  password: String,
  address: String,
  postalcode: String,
  city: String,
  country: String,
  avatar: String
});