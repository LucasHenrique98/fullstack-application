import { User, User as UserSchema } from "../../models/User";

export interface LoginInput {
  email: string;
  password: string;
}

class Login {
  async execute(userData: LoginInput) {
    const user = await UserSchema.findOne({ email: userData.email });

    if (!user) {
      throw new Error('User not found.');
    };

    const isPasswordMatch = await user.comparePassword(userData.password);

    if (!isPasswordMatch) {
      throw new Error('Password not match.');
    }

    return user.generateAuthToken();
  };
}

export default new Login()