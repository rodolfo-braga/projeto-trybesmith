import { RowDataPacket } from 'mysql2';

export interface Order {
  products: number[],
}

export interface IOrder extends Order, RowDataPacket {
  id: number,
  userId: number,
}

export interface NewOrder {
  order: {
    userId: number,
    products: number[],
  }
}