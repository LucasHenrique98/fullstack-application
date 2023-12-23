import { UserType } from "../../models/User";
import UserRepository from "../../repositories/UserRepository";

class CreateUser {
  async execute(user: UserType) {
    const User = {
      name: user.name,
      email: user.email
    };

    try {
      return await UserRepository.createUser(User);
    } catch (err) {
      console.log(err)
    }
  }
}

export default new CreateUser();