export interface Order {
  products: number[],
}

export interface NewOrder {
  order: {
    userId: number,
    products: number[],
  }
}