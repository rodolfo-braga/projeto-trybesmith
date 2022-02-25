import { NextFunction, Request, Response } from 'express';
import StatusCode from '../enums/StatusCode';
import { UserLogin } from '../interfaces/User';
import loginSchema from '../schemas/login';
import usersService from '../services/usersService';
import { generateToken } from '../utils/handleToken';

const login = async (req: Request, res: Response, next: NextFunction) => {
  const { error } = loginSchema.validate(req.body);
  if (error) return next(error);

  const { username, password } = req.body as UserLogin;

  const user = await usersService.findByUsernameAndPassword(username, password);
  if (user.error) return next(user.error);

  const token = generateToken(user.id, user.username);

  return res.status(StatusCode.OK).json({ token });
};

export default login;