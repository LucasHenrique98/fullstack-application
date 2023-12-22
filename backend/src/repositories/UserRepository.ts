import { IUserRepository, User } from "./interfaces/IUserRepository";

export class UserRepository implements IUserRepository {
  findById(id: string): Promise<User> {
    throw new Error("Method not implemented.");
  }
  createUser(user: Omit<User, "id">): Promise<User> {
    throw new Error("Method not implemented.");
  }
  
}