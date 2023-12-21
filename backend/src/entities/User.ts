export class User {
  constructor(private name: string, private email:string) {}

  get getUserName() {
    return this.name;
  }

  get getUserEmail() {
    return this.email;
  }
}