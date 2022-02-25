export interface Product {
  name: string,
  amount: string,
}

export interface IProduct extends Product {
  id: number,
}

export interface Item {
  item: IProduct,
}