import dotenv from "dotenv";
dotenv.config();

export const config = {
  PORT: process.env.PORT,
  MONGO_CONNECT_URL_SERVER: process.env.MONGO_URI_SERVER,
  ETHERSCAN_API_URL: process.env.ETHERSCAN_API_URL,
  ETHERSCAN_API_KEY: process.env.ETHERSCAN_API_KEY,
  API_BASE_URL: process.env.API_BASE_URL,
};
