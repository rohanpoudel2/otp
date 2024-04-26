import { Router } from "express";
import { verifyRoute } from "./verification/";
import { notFoundRoute } from "./notFound";

export const routes = () => {
  const app = Router();
  verifyRoute(app);
  notFoundRoute(app);
  return app;
}