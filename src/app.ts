import express from 'express';
import 'express-async-errors';
import login from './controllers/loginController';
import errorHandler from './middlewares/error';
import productsRouter from './routers/products';
import usersRouter from './routers/users';

const app = express();

app.use(express.json());

app.use('/login', login);
app.use('/users', usersRouter);
app.use('/products', productsRouter);

app.use(errorHandler);

export default app;
