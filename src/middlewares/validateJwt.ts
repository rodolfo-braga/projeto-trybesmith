import { NextFunction, Request, Response } from 'express';
import { decodeToken } from '../utils/handleToken';
import StatusCode from '../enums/StatusCode';
import usersModel from '../models/usersModel';
import { Payload } from '../interfaces/User';

const validateJwt = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;
  if (!token) return res.status(StatusCode.UNAUTHORIZED).json({ error: 'Token not found' });

  try {
    const { data: { id } }: Payload = decodeToken(token) as Payload;

    const user = await usersModel.findById(id);

    if (!user) {
      return res.status(StatusCode.UNAUTHORIZED).json({ error: 'Invalid token' });
    }

    next();
  } catch (err) {
    return res.status(StatusCode.UNAUTHORIZED).json({ error: 'Invalid token' });
  }
};

export default validateJwt;