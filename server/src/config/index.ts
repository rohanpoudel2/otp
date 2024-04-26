import dotenv from "dotenv";

const envFound = dotenv.config();
if (envFound.error) {
  throw new Error("No Environment Variables Configured");
}

export default {
  port: parseInt(process.env.PORT || '8080', 10),
  api: {
    prefix: '/api',
  },
}