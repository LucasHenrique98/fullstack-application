import { Document } from "mongoose";

export type User = {
  id: string;
  name: string;
  email: string;
  password: string
}


export interface IUserRepository {
  findById(id: string): Promise<User | null>
  createUser(user: Omit<User, 'id'>): Promise<Document<User>>
}