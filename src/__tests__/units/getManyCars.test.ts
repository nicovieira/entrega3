import { car_services } from "../../services/car.services";
import { carListMock } from "../__mocks__/car.mocks";
import { prismaMock } from "../__mocks__/prisma";

describe("Unit test: get many todo", () => {
  test("should be able to get many todo successfully", async () => {
    const carServices = new car_services();

    prismaMock.car.findMany.mockResolvedValue(carListMock);

    const data = await carServices.findMany();

    expect(data).toHaveLength(2);
    expect(data[0]).toStrictEqual(carListMock[0]);
    expect(data[1]).toStrictEqual(carListMock[1]);
  });
});
