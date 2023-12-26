import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { Database } from './database';
import userRoutes from './routes/user';
import loginRoutes from './routes/login';
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(userRoutes);
app.use(loginRoutes);

const database = Database.instance();
database.connect();

app.listen('8181', () => {
  console.log(`Server is running on port 8181`);
});