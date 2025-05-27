import Joi from "joi";

const loginValidator = Joi.object({
  email: Joi.string()
    .pattern(/^[^\s@]+@([^\s@.,]+\.)+[^\s@.,]{2,}$/)
    .required()
    .messages({
      "string.pattern.base": "Required format: name@domain.ext",
    }),
  // email: Joi.any(),
  password: Joi.any(),
});
export { loginValidator };
