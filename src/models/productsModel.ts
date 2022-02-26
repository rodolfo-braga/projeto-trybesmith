import { ResultSetHeader, RowDataPacket } from 'mysql2';

import connection from './connection';

import { IProduct, IProductDB, Item, Product } from '../interfaces/Product';

const create = async (product: Product): Promise<Item> => {
  const { name, amount } = product;
  const [result] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)', 
    [name, amount],
  );
  const { insertId: id } = result;

  const insertedProduct: IProduct = { id, name, amount };

  return { item: insertedProduct };
};

const findAll = async (): Promise<IProductDB[]> => {
  const [products] = await connection.execute<RowDataPacket[]>(
    'SELECT * FROM Trybesmith.Products',
  );
  
  return products as IProductDB[];
};

export default {
  create,
  findAll,
};