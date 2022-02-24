import { ResultSetHeader } from 'mysql2';

import connection from './connection';

import { IUser, User } from '../interfaces/User';

const create = async (user: IUser): Promise<User> => {
  const { username, classe, level, password } = user;
  const [result] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?, ?, ?, ?)', 
    [username, classe, level, password],
  );
  const { insertId: id } = result;

  const insertedUser: User = { id, username, classe, level, password };

  return insertedUser;
};

export default {
  create,
};
