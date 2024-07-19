import { tCar, tCarCreate } from "../../schemas/car.schemas";

export const carDefaultExpects = (data: tCar, expectData: tCarCreate) => {
  expect(data.id).toBeDefined();
  expect(data.name).toBe(expectData.name);
  expect(data.description).toBe(expectData.description);
  expect(data.brand).toBe(expectData.brand);
  expect(data.year).toBe(expectData.year);
  expect(data.km).toBe(expectData.km);
};
