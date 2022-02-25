import Joi from 'joi';

const productSchema = Joi.object({
  name: Joi.string().min(3).required().messages({
    'any.required': 'Name is required',
    'string.min': 'Name must be longer than 2 characters',
    'string.base': 'Name must be a string',
  }),
  amount: Joi.string().min(3).required().messages({
    'any.required': 'Amount is required',
    'string.min': 'Amount must be longer than 2 characters',
    'string.base': 'Amount must be a string',
  }),
});

export default productSchema;