import { prisma } from "../../database/prisma";
import { carCreateBodyMock, invalidCarIdMock } from "../__mocks__/car.mocks";
import { request } from "../utils/request";

describe("Integration test: Delete car", () => {
  test("should be able to delete car successfully", async () => {
    const car = await prisma.car.create({ data: carCreateBodyMock });

    await request.delete(`/cars/${car.id}`).expect(204);
  });

  test("Should throw error when car is invalid", async () => {
    await request.delete(`/cars/${invalidCarIdMock}`).expect(404);
  });
});
