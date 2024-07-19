import { car_services } from "../../services/car.services";
import { carMock, carUpdateBodyMock } from "../__mocks__/car.mocks";
import { prismaMock } from "../__mocks__/prisma";

describe("Unit test: update todo", () => {
  test("should be able to update todo successfully", async () => {
    const todoServices = new car_services();

    const updateCar = { ...carMock, ...carUpdateBodyMock };

    prismaMock.car.update.mockResolvedValue(updateCar);

    const data = await todoServices.update(todoUpdateBodyMock, todoMock.id);

    expect(data).toStrictEqual(updateTodo);
  });
});
