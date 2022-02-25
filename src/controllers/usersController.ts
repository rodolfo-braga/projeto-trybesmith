import express from 'express';
import rescue from 'express-rescue';
import StatusCode from '../enums/StatusCode';
import userSchema from '../schemas/user';
import usersService from '../services/usersService';
import generateToken from '../utils/handleToken';

const usersRouter = express.Router();

usersRouter.post('/', rescue(async (req, res, next) => {
  const { error } = userSchema.validate(req.body);
  if (error) return next(error);

  const newUser = await usersService.create(req.body);
  if (newUser.error) return next(newUser.error);

  const token = generateToken(newUser.id, newUser.username);

  return res.status(StatusCode.CREATED).json({ token });
}));

export default usersRouter;