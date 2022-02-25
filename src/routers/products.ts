import express from 'express';
import validateJwt from '../middlewares/validateJwt';
import productsController from '../controllers/productsController';

const productsRouter = express.Router();

productsRouter.post('/', validateJwt, productsController.create);

export default productsRouter;