import Joi from "joi";

const orderValidator = Joi.object({
  group: Joi.string().alphanum().min(2).max(30).required(),
  name: Joi.string().alphanum().min(2).max(30).required(),
  surname: Joi.string().alphanum().min(2).max(30).required(),
  email: Joi.string()
    .pattern(/^[^\s@]+@([^\s@.,]+\.)+[^\s@.,]{2,}$/)
    .required()
    .messages({
      "string.pattern.base": "Please enter a valid email address in the format: name@domain.extension",
    }),
  phone: Joi.string()
    .pattern(/^0\d{9}$/)
    .required()
    .messages({
      "string.pattern.base": "Required format: 0XXXXXXXXX",
    }),
  age: Joi.number().integer().min(13).max(70).required(),
  sum: Joi.number().integer().min(1).max(100000).required(),
  alreadyPaid: Joi.number().integer().min(1).max(100000).required(),
});
export { orderValidator };
