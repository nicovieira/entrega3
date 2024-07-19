import { prisma } from "../database/prisma";
import { app_error } from "../errors/appError";
import { NextFunction, Request, Response } from "express";

export class is_car_id_valid {
  static async execute(req: Request, res: Response, next: NextFunction) {
    const id = req.params.id;

    const car = await prisma.car.findFirst({
      where: { id: id },
    });

    if (!car) {
      throw new app_error(404, "Car not found.");
    }

    res.locals.car = car;

    next();
  }
}
