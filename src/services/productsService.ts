import { Product } from '../interfaces/Product';
import productsModel from '../models/productsModel';

const create = async (product: Product) => {
  const newProduct = await productsModel.create(product);

  return newProduct;
};

export default {
  create,
};