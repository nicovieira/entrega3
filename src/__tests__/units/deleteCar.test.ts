import { car_services } from "../../services/car.services";
import { carMock } from "../__mocks__/car.mocks";

describe("Unit test: Delete car", () => {
  test("should be able to delete car successfully", async () => {
    const carServices = new car_services();

    await carServices.delete(carMock.id);
  });
});
