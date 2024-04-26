import { NextFunction, Request, Response } from "express";

const validateCode = (req: Request, res: Response, next: NextFunction) => {
  const code = req.body.code;
  let errors: string[] = [];

  const validate = (condition: boolean, message: string) => {
    if (!condition) {
      errors.push(message);
    }
  };

  validate(typeof code !== 'undefined', 'Code must exist');
  validate(code && code.length === 6, 'Code must be 6 digits long');
  validate(/^\d+$/.test(code), 'Code must only contain digits');
  validate(!code?.endsWith('7'), 'Code cannot end with 7');

  if (errors.length > 0) {
    res.status(400).json({ errors });
  } else {
    next();
  }
};

export default validateCode;