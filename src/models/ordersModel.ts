import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { IOrder, NewOrder, Order } from '../interfaces/Order';
import { UserId } from '../interfaces/User';

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

const findOne = async (id: number): Promise<IOrder | null> => {
  const [result] = await connection.execute<UserId[]>(
    'SELECT userId FROM Trybesmith.Orders WHERE id = ?',
    [id],
  );
   
  if (!result.length) return null;

  const { userId } = result[0];

  const [productsIds] = await connection.execute<RowDataPacket[]>(
    'SELECT id FROM Trybesmith.Products WHERE orderId = ?',
    [id],
  );

  const products: number[] = productsIds.map((product) => product.id);

  return { id, userId, products } as IOrder;
};

export default {
  create,
  findOne,
};