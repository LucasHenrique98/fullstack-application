import { RequestHandler } from "express";
import createUser from "../use-cases/user/createUser";
import { User } from "../domain/User";

class UserController {
  createNewUser: RequestHandler = async (req, res) => {
    const newUser = {
      name: req.body.name,
      email: req.body.email
    };

    const newUserData = await createUser.execute(new User(newUser.name, newUser.email));

    res.json(newUserData);
  }
}

export default new UserController();