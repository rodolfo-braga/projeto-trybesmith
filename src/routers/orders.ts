import express from 'express';
import ordersController from '../controllers/ordersController';
import validateJwt from '../middlewares/validateJwt';

const ordersRouter = express.Router();

ordersRouter
  .post('/', validateJwt, ordersController.create)
  .get('/:id', validateJwt, ordersController.findOne);

export default ordersRouter;