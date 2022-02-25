import { IUser, User } from '../interfaces/User';
import usersModel from '../models/usersModel';

const create = async (user: IUser) => {
  const newUser = await usersModel.create(user);

  return newUser;
};

const findByEmailAndPassword = async (username: string, password: string) => {
  const user = await usersModel.findByEmailAndPassword(username, password);
  
  if (!user) {
    return { 
      error: { code: 'UNAUTHORIZED', message: 'Username or password invalid' } } as User;
  }

  return user;
};

export default {
  create,
  findByEmailAndPassword,
};
