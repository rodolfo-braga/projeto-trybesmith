import Joi from 'joi';

const orderSchema = Joi.object({
  products: Joi.array().items(Joi.number()).min(1).required()
    .messages({
      'any.required': 'Products is required',
      'array.min': 'Products can\'t be empty',
      'array.base': 'Products must be an array of numbers',
    }),
});

export default orderSchema;