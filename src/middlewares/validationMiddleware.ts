import Joi, { ValidationResult } from 'joi';
import { Request, Response, NextFunction, RequestHandler } from 'express';

export default function validate(schema: Joi.Schema): RequestHandler {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error }: ValidationResult = schema.validate(req.body);

    if (error) {
      const validationErrors = error.details.map((err) => err.message);
      console.log('validation errors are : ',validationErrors)
      return res.status(400).json({ errors: validationErrors });
    }

    next();
  };
}
