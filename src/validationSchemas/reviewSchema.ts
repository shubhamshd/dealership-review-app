import Joi from 'joi';

const create = Joi.object({
  dealershipName: Joi.string().required(),
  productDetails: Joi.object({
    make: Joi.string().required(),
    model: Joi.string().required(),
    variant: Joi.string().required(),
  }),
  rating: Joi.number().required().min(1).max(5),
  comments: Joi.array().items(
    Joi.object({
      text: Joi.string().required(),
      timestamp: Joi.date().default(Date.now),
      user: Joi.string().required(),
      media: Joi.array()
        .items(
          Joi.object({
            url: Joi.string().required(),
            type: Joi.string().required(),
          }),
        )
        .optional(),
    }),
  ),
});

export default { create };
