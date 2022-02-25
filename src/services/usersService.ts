import { User, IUser } from '../interfaces/User';
import usersModel from '../models/usersModel';

const create = async (user: User) => {
  const newUser = await usersModel.create(user);

  return newUser;
};

const findByUsernameAndPassword = async (username: string, password: string) => {
  const user = await usersModel.findByUsernameAndPassword(username, password);
  
  if (!user) {
    return { 
      error: { code: 'UNAUTHORIZED', message: 'Username or password invalid' } } as IUser;
  }

  return user;
};

export default {
  create,
  findByUsernameAndPassword,
};
