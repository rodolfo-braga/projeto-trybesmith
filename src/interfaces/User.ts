import { JwtPayload } from 'jsonwebtoken';
import { RowDataPacket } from 'mysql2';
import { Error } from './Error';

export interface UserLogin {
  username: string,
  password: string,
}

export interface User extends UserLogin {
  classe: string,
  level: number,
}

export interface IUser extends User {
  id: number,
  error?: Error,
}

export interface Payload extends JwtPayload {
  data: {
    id: number,
    username: string,
  }
}

export interface UserId extends RowDataPacket {
  userId: number,
}