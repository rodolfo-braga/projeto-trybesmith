import { JwtPayload } from 'jsonwebtoken';

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
  error?: {
    code: string,
    message: string,
  }
}

export interface Payload extends JwtPayload {
  data: {
    id: number,
    username: string,
  }
}