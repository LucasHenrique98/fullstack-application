import { RequestHandler } from "express";
import Login from "../use-cases/user/login";

class LoginController {
  login: RequestHandler =  async (req, res) => {
    try {
      const inputData = {
        email: req.body.email,
        password: req.body.password
      };

      
      const token = await Login.execute(inputData);
      
      console.log(token)
      if (token) {
        res.cookie('token', token, { httpOnly: true, sameSite: 'strict', secure: false })
      }
  
      res.status(200);
      res.json({ message: 'Login Success' })
    } catch (error) {
      console.log(error)
      res.status(400)
      res.json({ message: 'Login Failed' })
    }
  }
}

export default new LoginController();