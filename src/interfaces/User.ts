import { JwtPayload } from 'jsonwebtoken';
import { Error } from './Error';

export interface UserLogin {
  username: string,
  password: string,
}

export interface User extends UserLogin {
  classe: string,
  level: number,
}

export interface IUser extends User, Error {
  id: number,
}

export interface Payload extends JwtPayload {
  data: {
    id: number,
    username: string,
  }
}