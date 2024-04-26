import { Router, Request, Response } from "express";

export function notFoundRoute(app: Router) {
  app.use((_: Request, res: Response) => {
    res.status(404).send("Not Found");
  });
}