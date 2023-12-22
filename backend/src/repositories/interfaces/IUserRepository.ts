export type User = {
  id: string;
  name: string;
  email: string;
}


export interface IUserRepository {
  findById(id: string): Promise<User>
  createUser(user: Omit<User, 'id'>): Promise<User>
}