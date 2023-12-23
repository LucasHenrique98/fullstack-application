import mongoose from 'mongoose';
const { Schema } = mongoose;

type UserType = {
  name: string;
  email: string;
};

const userSchema = new Schema({
  name: String,
  email: String
});

const User = mongoose.model('user', userSchema);

export { User };