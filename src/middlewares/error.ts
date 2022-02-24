import { ErrorRequestHandler } from 'express';

import StatusCode from '../enums/StatusCode';

const errorHandler: ErrorRequestHandler = (err, _req, res, _next) => {
  if (err.isJoi) {
    const status = err.details[0].message.includes('required')
      ? StatusCode.BAD_REQUEST
      : StatusCode.UNPROCESSABLE_ENTITY;
    
    return res.status(status).json({ error: err.details[0].message });
  }

  const status: number = StatusCode[err.code as keyof typeof StatusCode]
    || StatusCode.INTERNAL_SERVER_ERROR;

  res.status(status).json({ error: err.message });
};

export default errorHandler;

/*
Referências:
- Para tipagem do middleware de erro:
https://stackoverflow.com/questions/50218878/typescript-express-error-function
- Para uso 'keyof typeof':
https://stackoverflow.com/questions/55377365/what-does-keyof-typeof-mean-in-typescript
*/