import { car_services } from "../../services/car.services";
import { carMock } from "../__mocks__/car.mocks";
import { prismaMock } from "../__mocks__/prisma";

describe("Unit test: Get one cars", () => {
  test("should be able to get one cars successfully", async () => {
    const carServices = new car_services();

    prismaMock.car.findFirst.mockResolvedValue(carMock);

    const data = await carServices.findOne(carMock.id);

    expect(data?.id).toStrictEqual(carMock.id);
  });
});
