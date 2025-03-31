import Joi from "joi";

const orderValidator = Joi.object({
  group: Joi.string().alphanum().min(2).max(30).required(),
  name: Joi.string().alphanum().min(2).max(30).required(),
  surname: Joi.string().alphanum().min(2).max(30).required(),
  email: Joi.string()
    .pattern(/^[^\s@]+@([^\s@.,]+\.)+[^\s@.,]{2,}$/)
    .required()
    .messages({
      "string.pattern.base": "Required format: name@domain.extension",
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
  status: Joi.string().optional(),
  course: Joi.string().optional(),
  courseType: Joi.string().optional(),
  courseFormat: Joi.string().optional(),
});
export { orderValidator };
