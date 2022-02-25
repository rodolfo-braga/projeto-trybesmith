import { ResultSetHeader, RowDataPacket } from 'mysql2';

import connection from './connection';

import { User, IUser } from '../interfaces/User';

const create = async (user: User): Promise<IUser> => {
  const { username, classe, level, password } = user;
  const [result] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?, ?, ?, ?)', 
    [username, classe, level, password],
  );
  const { insertId: id } = result;

  const insertedUser: IUser = { id, username, classe, level, password };

  return insertedUser;
};

const findByUsernameAndPassword = async (username: string, password: string): Promise<IUser> => {
  const [result] = await connection.execute<RowDataPacket[]>(
    'SELECT * FROM Trybesmith.Users WHERE username = ? AND password = ?',
    [username, password],
  );

  return result[0] as IUser;
};

const findById = async (id: number): Promise<IUser> => {
  const [result] = await connection.execute<RowDataPacket[]>(
    'SELECT * FROM Trybesmith.Users WHERE id = ?',
    [id],
  );

  return result[0] as IUser;
};

export default {
  create,
  findByUsernameAndPassword,
  findById,
};
