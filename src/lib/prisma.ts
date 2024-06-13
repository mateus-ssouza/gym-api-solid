import { PrismaClient } from "@prisma/client";
import { env } from "../env";

export const prisma = new PrismaClient({
  // Habilitando logs apenas em ambiente de desenvolvimento.
  log: env.NODE_ENV === "dev" ? ["query"] : [],
});
