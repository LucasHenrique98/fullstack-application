import { Document } from "mongoose";
import { User as UserSchema } from "../models/User";
import { IUserRepository, User } from "./interfaces/IUserRepository";

export class UserRepository implements IUserRepository {
  findById(id: string): Promise<User | null> {
    return UserSchema.findById(id);
  }

  createUser(user: Omit<User, "id">): Promise<Document> {
    return UserSchema.create({
      name: user.name,
      email: user.email,
    })
  }
}