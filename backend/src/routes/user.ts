import { Router } from 'express';
import UserController from '../controllers/UserController';

const route = Router();

route.get('/user');
route.post('/user', UserController.createNewUser);

export default route;