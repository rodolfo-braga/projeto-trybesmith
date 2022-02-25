export interface UserLogin {
  username: string,
  password: string,
}

export interface IUser extends UserLogin {
  classe: string,
  level: number,
}

export interface User extends IUser {
  id: number,
  error?: {
    code: string,
    message: string,
  }
}