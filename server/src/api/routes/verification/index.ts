import { Router } from "express";
import validateCode from "../../middlewares/isValid";
import verifyCode from "../../controllers/verification";

const route = Router();

export const verifyRoute = (app: Router) => {
  app.use('/', route);
  route.post('/verify', validateCode, verifyCode);
}