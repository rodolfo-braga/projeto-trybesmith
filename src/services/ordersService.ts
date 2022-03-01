import { IOrder, Order } from '../interfaces/Order';
import { IUser } from '../interfaces/User';
import ordersModel from '../models/ordersModel';

const create = async (order: Order, user: IUser) => {
  const { id: userId } = user;
  const newOrder = await ordersModel.create(order, userId);

  return newOrder;
};

const findById = async (id: number) => {
  const order = await ordersModel.findById(id);
  
  if (!order) return { error: { code: 'NOT_FOUND', message: 'Order not found' } } as IOrder;

  return order;
};

const findAll = async () => {
  const orders = await ordersModel.findAll();

  return orders;
};

export default {
  create,
  findById,
  findAll,
};