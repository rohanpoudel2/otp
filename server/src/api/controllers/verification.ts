import { Request, Response } from 'express';

const verifyCode = async (_: Request, res: Response) => {
  try {
    res.status(200).send("Verified");
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export default verifyCode;