import { randomUUID } from "node:crypto";
import { CheckInsRepository } from "./../check-ins-repository";
import { CheckIn, Prisma } from "@prisma/client";

export class InMemoryCheckInsRepository implements CheckInsRepository {
  public items: CheckIn[] = [];

  async create(data: Prisma.CheckInUncheckedCreateInput) {
    const checkIn = {
      id: randomUUID(),
      created_at: new Date(),
      validate_at: data.validate_at ? new Date(data.validate_at) : null,
      user_id: data.user_id,
      gym_id: data.gym_id,
    };

    this.items.push(checkIn);

    return checkIn;
  }
}
