import { car_services } from "../../services/car.services";
import { carCreateBodyMock, carMock } from "../__mocks__/car.mocks";
import { prismaMock } from "../__mocks__/prisma";

describe("Unit test: Create car", () => {
  test("Should be able to create a car successfully", async () => {
    const carServices = new car_services();

    prismaMock.car.create.mockResolvedValue(carMock);

    const data = await carServices.create(carCreateBodyMock);

    expect(data).toStrictEqual(carMock);
  });
});
