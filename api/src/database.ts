import mongoose, { ConnectOptions } from "mongoose";
import config from "./config";

(async () => {
  try {
    const mongooseOptions: ConnectOptions = {
      //   user: config.MONGO_USERNAME,
      //   pass: config.MONGO_PASSWORD,
    };
    const db = await mongoose.connect(
      `mongodb://${config.MONGO_HOSTNAME}/${config.MONGO_DATABASE}`
    );
    console.log("Database is connected to : ", db.connection.name);
  } catch (error) {
    console.error(error);
  }
})();
