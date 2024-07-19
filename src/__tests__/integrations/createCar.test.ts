import { request } from "../utils/request";
import { prisma } from "../../database/prisma";
import { carCreateBodyMock } from "../__mocks__/car.mocks";
import { carDefaultExpects } from "../utils/carDefaultExpects";

describe("Integration test: Create car", () => {
  beforeEach(async () => {
    await prisma.$transaction([prisma.car.deleteMany()]);
  });

  test("should be able to create a car successfully", async () => {
    const data = await request
      .post("/cars")
      .send(carCreateBodyMock)
      .expect(201)
      .then((response) => response.body);

    carDefaultExpects(data, carCreateBodyMock);
  });
});
