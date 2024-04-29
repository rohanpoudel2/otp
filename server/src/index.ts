import express from "express";
import cors from "cors";
import config from "./config";
import { routes } from "./api/routes";

const startServer = () => {
  const app = express();
  app.use(express.json());
  app.use(cors({
    origin: '*'
  }))
  app.use(routes());

  app.listen(config.port, () => {
    console.log(`Server Listening on Port: ${config.port}`)
  }).on('error', error => {
    console.log(`Error starting server: ${error}`);
    process.exit(1);
  });
}

startServer();