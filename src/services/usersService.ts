import { IUser } from '../interfaces/User';
import usersModel from '../models/usersModel';

const create = async (user: IUser) => {
  const newUser = await usersModel.create(user);

  return newUser;
};

export default {
  create,
};
