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

const findOne = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;

  const order = await ordersService.findOne(Number(id));
  if (order.error) return next(order.error);

  return res.status(StatusCode.OK).json(order);
};

export default {
  create,
  findOne,
};