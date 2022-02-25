import Joi from 'joi';

const loginSchema = Joi.object({
  username: Joi.required().messages({
    'any.required': 'Username is required',
  }),
  password: Joi.required().messages({
    'any.required': 'Password is required',
  }),
});

export default loginSchema;