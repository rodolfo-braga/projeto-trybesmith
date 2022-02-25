import express from 'express';
import rescue from 'express-rescue';
import StatusCode from '../enums/StatusCode';
import { UserLogin } from '../interfaces/User';
import loginSchema from '../schemas/login';
import usersService from '../services/usersService';
import generateToken from '../utils/handleToken';

const loginRouter = express.Router();

loginRouter.post('/', rescue(async (req, res, next) => {
  const { error } = loginSchema.validate(req.body);
  if (error) return next(error);

  const { username, password } = req.body as UserLogin;

  const user = await usersService.findByEmailAndPassword(username, password);
  if (user.error) return next(user.error);

  const token = generateToken(user.id, user.username);

  return res.status(StatusCode.OK).json({ token });
}));

export default loginRouter;