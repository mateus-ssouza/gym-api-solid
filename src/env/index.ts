import "dotenv/config";
import { z } from "zod";

const enSchema = z.object({
  NODE_ENV: z.enum(["dev", "test", "prod"]).default("dev"),
  PORT: z.coerce.number().default(3333),
  JWT_SECRET: z.string(),
});

const _env = enSchema.safeParse(process.env);

if (_env.success == false) {
  console.error("Invalid enviromment variables", _env.error.format());

  throw new Error("Invalid enviromment variables");
}

export const env = _env.data;
