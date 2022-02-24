import express from 'express';
import rescue from 'express-rescue';
import jwt, { JwtPayload, Secret, SignOptions } from 'jsonwebtoken';
import StatusCode from '../enums/StatusCode';
import userSchema from '../schemas/user';
import usersService from '../services/usersService';

const usersRouter = express.Router();

const jwtSecret: Secret = process.env.JWT_SECRET || 'SecretDefault';

usersRouter.post('/', rescue(async (req, res, next) => {
  const { error } = userSchema.validate(req.body);
  if (error) return next(error);

  const newUser = await usersService.create(req.body);
  if (newUser.error) return next(newUser.error);

  const jwtConfig: SignOptions = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };

  const data: JwtPayload = {
    id: newUser.id,
    username: newUser.username,
  };

  const token: string = jwt.sign({ data }, jwtSecret, jwtConfig);

  return res.status(StatusCode.CREATED).json({ token });
}));

export default usersRouter;