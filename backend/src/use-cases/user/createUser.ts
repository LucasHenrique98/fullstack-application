import { User } from "../../domain/User";
import UserRepository from "../../repositories/UserRepository";

class CreateUser {
  async execute(user: User & { password: string }) {
    const User = {
      name: user.getUserName,
      email: user.getUserEmail,
      password: user.password
    };

    try {
      return await UserRepository.createUser(User);
    } catch (err) {
      console.log(err)
    }
  }
}

export default new CreateUser();