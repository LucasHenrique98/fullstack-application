import { Router } from 'express';
import UserController from '../controllers/UserController';
import { ApiRateLimiter } from '../middlewares/attempts.middleware';
import LoginController from '../controllers/LoginController';

const route = Router();

route.get('/user', ApiRateLimiter, LoginController.login);
route.post('/user', ApiRateLimiter, UserController.createNewUser);

export default route;