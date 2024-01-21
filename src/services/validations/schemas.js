const Joi = require('joi');

const newUserSchema = Joi.object({
  displayName: Joi.string().min(8),
  email: Joi.string().email(),
  password: Joi.string().min(6),
  image: Joi.string(),
});

const categorySchema = Joi.object({
  name: Joi.string().required(),
});

const postSchema = Joi.object({
  title: Joi.string().required().messages({
    'any.required': 'Some required fields are missing',
  }),
  content: Joi.string().required().messages({
    'any.required': 'Some required fields are missing',
  }),
});

module.exports = {
  newUserSchema,
  categorySchema,
  postSchema,
};