import { RowDataPacket } from 'mysql2';

export interface Product {
  name: string,
  amount: string,
}

export interface IProduct extends Product {
  id: number,
}

export interface IProductDB extends IProduct, RowDataPacket {
  orderId: number | null,
}

export interface Item {
  item: IProduct,
}