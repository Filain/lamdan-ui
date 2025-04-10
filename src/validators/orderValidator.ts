import Joi from "joi";

const orderValidator = Joi.object({
  group: Joi.string().min(2).max(30).optional().allow(""),
  name: Joi.string()
    .min(2)
    .max(30)
    .optional()
    .allow("")
    .pattern(/^[a-zA-Zа-яА-Я]+$/)
    .messages({
      "string.pattern.base": "Just letters",
    }),
  surname: Joi.string()
    .min(2)
    .max(30)
    .optional()
    .allow("")
    .pattern(/^[a-zA-Zа-яА-Я]+$/)
    .messages({
      "string.pattern.base": "Just letters",
    }),
  email: Joi.string()
    .pattern(/^[^\s@]+@([^\s@.,]+\.)+[^\s@.,]{2,}$/)
    .optional()
    .allow("")
    .messages({
      "string.pattern.base": "Required format: name@domain.extension",
    }),
  phone: Joi.string()
    .pattern(/^0\d{9}$/)
    .optional()
    .allow("")
    .messages({
      "string.pattern.base": "Required format: 0XXXXXXXXX",
    }),
  age: Joi.number().integer().min(13).max(70).optional().allow(""),
  sum: Joi.number().integer().min(1).max(100000).optional().allow(""),
  alreadyPaid: Joi.number().integer().min(1).max(100000).optional().allow(""),
  status: Joi.string().optional().allow(""),
  course: Joi.string().optional().allow(""),
  courseType: Joi.string().optional().allow(""),
  courseFormat: Joi.string().optional().allow(""),
});
export { orderValidator };
