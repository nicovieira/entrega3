import { Request, Response } from "express";
import { car_services } from "../services/car.services";

const carServices = new car_services();

export class car_controllers {
  async create(req: Request, res: Response) {
    const response = await carServices.create(req.body);

    return res.status(201).json(response);
  }

  async findMany(req: Request, res: Response) {
    const response = await carServices.findMany();

    return res.status(200).json(response);
  }

  async findOne(req: Request, res: Response) {
    const response = await carServices.findOne(res.locals.car);

    return res.status(200).json(response);
  }

  async update(req: Request, res: Response) {
    const response = await carServices.update(req.params.id, req.body);

    return res.status(200).json(response);
  }

  async delete(req: Request, res: Response) {
    await carServices.delete(req.params.id);

    return res.status(204).json();
  }
}
