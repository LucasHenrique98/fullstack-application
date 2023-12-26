import { RequestHandler } from "express";
import createUser from "../use-cases/user/createUser";
import { User } from "../domain/User";

class UserController {
  createNewUser: RequestHandler = async (req, res) => {
    const newUser = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    };

    const newUserData = await createUser.execute(Object.assign(new User(newUser.name, newUser.email), { password: newUser.password }));

    res.json(newUserData);
  }
}

export default new UserController();