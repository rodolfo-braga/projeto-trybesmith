import { IUser } from '../../interfaces/User';

declare global {
  namespace Express {
    interface Request {
      user: IUser,
    }
  }
}