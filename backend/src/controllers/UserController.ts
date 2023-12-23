import { RequestHandler } from "express";
import createUser from "../use-cases/user/createUser";

class UserController {
  createNewUser: RequestHandler = async (req, res) => {
    const newUser = {
      name: req.body.name,
      email: req.body.email
    };
    const newUserData = await createUser.execute(newUser);

    res.json(newUserData);
  }
}

export default new UserController();