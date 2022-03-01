import { RowDataPacket } from 'mysql2';
import { Error } from './Error';

export interface Order {
  products: number[],
}

export interface IOrder extends Order, RowDataPacket {
  id: number,
  userId: number,
  error?: Error,
}

export interface NewOrder {
  order: {
    userId: number,
    products: number[],
  }
}