import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
const { Schema } = mongoose;

export type UserType = {
  name: string;
  email: string;
};

const userSchema = new Schema({
  name: String,
  email: String,
  password: {
    type: String,
    required: true,
    minLength: [8, 'Password must be at least 8 characters long'],
    maxLength: [128, 'Password must be less than 128 character long']
  }
});

userSchema.pre('save', async function() {
  const user = this;
  if (!user.isModified('password')) {
    return;
  }
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);
});

userSchema.methods.comparePassword = async function(password: string) {
  return await bcrypt.compare(password, this.password);
};

userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET as string, { expiresIn: '1d' });
  return token;
}

userSchema.statics.findByToken = async function(token: string) {
  try {
    const decoded = jwt.verify(token, process.env.JWT_TOKEN as string);
    return await this.findOne({ _id: decoded._id });
  } catch(err: any) {
    throw new Error(`Error verifying token: ${err.message}`);
  }
}

const User = mongoose.model('user', userSchema);

export { User };