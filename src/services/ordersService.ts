import { Error } from '../interfaces/Error';
import { Order } from '../interfaces/Order';
import { IUser } from '../interfaces/User';
import ordersModel from '../models/ordersModel';

const create = async (order: Order, user: IUser) => {
  const { id: userId } = user;
  const newOrder = await ordersModel.create(order, userId);

  return newOrder;
};

const findOne = async (id: number) => {
  const order = await ordersModel.findOne(id);
  
  if (!order) return { error: { code: 'NOT_FOUND', message: 'Order not found' } } as Error;

  return order;
};

export default {
  create,
  findOne,
};