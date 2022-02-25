import express from 'express';
import loginRouter from './controllers/loginController';
import usersRouter from './controllers/usersController';
import errorHandler from './middlewares/error';

const app = express();

app.use(express.json());

app.use('/users', usersRouter);
app.use('/login', loginRouter);

app.use(errorHandler);

export default app;
