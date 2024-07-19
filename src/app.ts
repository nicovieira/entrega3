import "dotenv/config";
import "express-async-errors";
import express, { json } from "express";
import { carRouter } from "./routes/cars.routes";
import { handle_errors } from "./middlewares/handleErrors.middleware";

export const app = express();

app.use(json());

app.use("/cars", carRouter);

app.use(handle_errors.execute);
