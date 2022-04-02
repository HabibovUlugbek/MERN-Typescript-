import dotenv from "dotenv";
dotenv.config();

export default {
  MONGO_DATABASE: process.env.MONGO_DATABASE || "mern-database",
  MONGO_USERNAME: process.env.MONGO_USERNAME || "admin",
  MONGO_PASSWORD: process.env.MONGO_PASSWORD || "admin",
  MONGO_HOSTNAME: process.env.MONGO_HOSTNAME || "localhost",
  PORT: process.env.PORT || 3000,
};
