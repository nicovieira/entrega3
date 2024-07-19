import { prisma } from "../../database/prisma";
import { carCreateBodyMock, carUpdateBodyMock, invalidCarIdMock } from "../__mocks__/car.mocks";
import { request } from "../utils/request";

describe("Integration test: Update car", () => {
  test("should be able to update car successfully", async () => {
    const car = await prisma.car.create({ data: carCreateBodyMock });

    const data = await request
      .patch(`/cars/${car.id}`)
      .send(carUpdateBodyMock)
      .expect(200)
      .then((response) => response.body);

    const updateCar = { ...car, ...carUpdateBodyMock };

    expect(data).toStrictEqual(updateCar);
  });

  test("Should throw error when car is invalid", async () => {
    await request.patch(`/cars/${invalidCarIdMock}`).expect(404);
  });
});
