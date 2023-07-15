import Joi, { ValidationResult } from 'joi';
import { Request, Response, NextFunction, RequestHandler } from 'express';

export default function validate(schema: Joi.Schema): RequestHandler {
  return (req: Request, res: Response, next: NextFunction) => {
    console.log(req.body)
    console.log(req.body.comments[0].text)
    const { error }: ValidationResult = schema.validate(req.body);

    if (error) {
      const validationErrors = error.details.map((err) => err.message);
      console.log(validationErrors)
      return res.status(400).json({ errors: validationErrors });
    }

    next();
  };
}
