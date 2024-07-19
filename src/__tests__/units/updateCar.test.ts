import { car_services } from "../../services/car.services";
import { carMock, carUpdateBodyMock } from "../__mocks__/car.mocks";
import { prismaMock } from "../__mocks__/prisma";

describe("Unit test: Update car", () => {
  test("should be able to update car successfully", async () => {
    const carServices = new car_services();

    const updateCar = { ...carMock, ...carUpdateBodyMock };

    prismaMock.car.update.mockResolvedValue(updateCar);

    const data = await carServices.update(carMock.id, carUpdateBodyMock);

    expect(data).toStrictEqual(updateCar);
  });
});
