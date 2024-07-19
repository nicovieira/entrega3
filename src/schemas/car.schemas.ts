import { number, string, z } from "zod";

export const carSchema = z.object({
  id: string(),
  name: string(),
  description: string().optional().nullish(),
  brand: string(),
  year: number().min(4),
  km: number().min(1),
});

export type tCar = z.infer<typeof carSchema>;

export const carCreateSchema = carSchema.omit({ id: true });

export const carUpdateSchema = carCreateSchema.partial();

export type tCarBody = z.infer<typeof carCreateSchema>;

export type tCarCreate = z.infer<typeof carCreateSchema>;

export type tCarUpdate = z.infer<typeof carUpdateSchema>;
