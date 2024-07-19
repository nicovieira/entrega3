import { tCar, tCarCreate, tCarUpdate } from "../schemas/car.schemas";
import { prisma } from "../database/prisma";

export class car_services {
  async create(body: tCarCreate): Promise<tCar> {
    const data = await prisma.car.create({ data: body });

    return data;
  }

  async findMany(): Promise<tCar[]> {
    const data = await prisma.car.findMany();

    return data;
  }

  async findOne(carId: string) {
    const data = await prisma.car.findFirst({ where: { id: carId } });
    console.log(data);
    return data;
  }

  async update(id: string, body: tCarUpdate): Promise<tCar> {
    const data = await prisma.car.update({ where: { id }, data: body });

    return data;
  }

  async delete(id: string): Promise<void> {
    await prisma.car.delete({ where: { id } });
  }
}
