import express from "express";
import config from "./config";

const app = express();

app.set("port", config.PORT);

export default app;
