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

const findById = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;

  const order = await ordersService.findById(Number(id));
  if (order.error) return next(order.error);

  return res.status(StatusCode.OK).json(order);
};

const findAll = async (req: Request, res: Response) => {
  const orders = await ordersService.findAll();

  return res.status(StatusCode.OK).json(orders);
};

export default {
  create,
  findById,
  findAll,
};