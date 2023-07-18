import Joi from 'joi';

const create = Joi.object({
  dealershipName: Joi.string().required(),
  productDetails: Joi.object({
    make: Joi.string().required(),
    model: Joi.string().required(),
    variant: Joi.string().required(),
  }),
  rating: Joi.number().required().min(1).max(5),
  comment: Joi.object({
    text: Joi.string().required(),
    timestamp: Joi.date().default(Date.now),
    user: Joi.string().required(),
    media: Joi.array()
      .items(
        Joi.object({
          type: Joi.string().valid('image', 'video', 'external').required(),
          imageData: Joi.binary().encoding('base64'),
          mediaId: Joi.string(),
          url: Joi.string(),
        }).or('imageData', 'mediaId', 'url').required(),
      )
      .optional(),
  }),
});

const updateReviewComment = Joi.object({
  dealershipName: Joi.string().required(),
  productDetails: Joi.object({
    make: Joi.string().required(),
    model: Joi.string().required(),
    variant: Joi.string().required(),
  }),
  comment: Joi.object({
    text: Joi.string().required(),
    timestamp: Joi.date().default(Date.now),
    user: Joi.string().required(),
    media: Joi.array()
      .items(
        Joi.object({
          type: Joi.string().valid('image', 'video', 'external').required(),
          imageData: Joi.binary().encoding('base64'),
          mediaId: Joi.string(),
          url: Joi.string(),
        }).or('imageData', 'mediaId', 'url').required(),
      )
      .optional(),
  }),
});

export default { create, updateReviewComment };
