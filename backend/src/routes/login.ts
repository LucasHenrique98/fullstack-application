import { Router } from 'express';
import LoginController from '../controllers/LoginController';

const route = Router();

route.post('/login', LoginController.login);