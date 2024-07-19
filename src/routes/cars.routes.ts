import { Router } from "express";
import { car_controllers } from "../controllers/car.controllers";
import { is_car_id_valid } from "../middlewares/isCarIdValid.middleware";
import { validate_body } from "../middlewares/validadeBody.middleware";
import { carCreateSchema, carUpdateSchema } from "../schemas/car.schemas";

export const carRouter = Router();

const carControllers = new car_controllers();

carRouter.use("/:id", is_car_id_valid.execute);

carRouter.post("/", validate_body.execute(carCreateSchema), carControllers.create);

carRouter.get("/", carControllers.findMany);

carRouter.get("/:id", carControllers.findOne);

carRouter.patch("/:id", validate_body.execute(carUpdateSchema), carControllers.update);

carRouter.delete("/:id", carControllers.delete);
