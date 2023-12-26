import { Router } from 'express';
import LoginController from '../controllers/LoginController';
import { ApiRateLimiter } from '../middlewares/attempts.middleware';

const route = Router();

route.get('/login', ApiRateLimiter, LoginController.login);

export default route;