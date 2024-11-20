import { z } from "zod";

export const OrthodonticScheme = z.object({
  cooperate: z.coerce.number().min(0).max(100),
  incooperate: z.coerce.number().min(0).max(100),
});
export type OrthodonticDTO = z.infer<typeof OrthodonticScheme>;
