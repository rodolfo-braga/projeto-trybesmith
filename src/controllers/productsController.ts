import { NextFunction, Request, Response } from 'express';
import StatusCode from '../enums/StatusCode';
import productSchema from '../schemas/product';
import productsService from '../services/productsService';

const create = async (req: Request, res: Response, next: NextFunction) => {
  const { error } = productSchema.validate(req.body);
  if (error) return next(error);

  const newProduct = await productsService.create(req.body);

  return res.status(StatusCode.CREATED).json(newProduct);
};

const findAll = async (req: Request, res: Response) => {
  const products = await productsService.findAll();

  return res.status(StatusCode.OK).json(products);
};

export default {
  create,
  findAll,
};