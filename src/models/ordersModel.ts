import { ResultSetHeader } from 'mysql2';
import { NewOrder, Order } from '../interfaces/Order';

import connection from './connection';

const create = async (order: Order, userId: number): Promise<NewOrder> => {
  const { products } = order;
  const [result] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.Orders (userId) VALUES (?)', 
    [userId],
  );
  const { insertId: orderId } = result;

  await connection.query(
    'UPDATE Trybesmith.Products SET orderId = ? WHERE id IN ?',
    [orderId, [products]],
  );

  return { order: {
    userId,
    products,
  } };
};

export default {
  create,
};