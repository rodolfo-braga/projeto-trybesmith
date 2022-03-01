import { NextFunction, Request, Response } from 'express';
import StatusCode from '../enums/StatusCode';
import orderSchema from '../schemas/order';
import ordersService from '../services/ordersService';

const create = async (req: Request, res: Response, next: NextFunction) => {
  const { error } = orderSchema.validate(req.body);
  if (error) return next(error);

  const newOrder = await ordersService.create(req.body, req.user);

  return res.status(StatusCode.CREATED).json(newOrder);
};

export default {
  create,
};