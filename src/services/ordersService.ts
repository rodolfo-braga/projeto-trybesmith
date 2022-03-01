import { Order } from '../interfaces/Order';
import { IUser } from '../interfaces/User';
import ordersModel from '../models/ordersModel';

const create = async (order: Order, user: IUser) => {
  const { id: userId } = user;
  const newOrder = await ordersModel.create(order, userId);

  return newOrder;
};

export default {
  create,
};