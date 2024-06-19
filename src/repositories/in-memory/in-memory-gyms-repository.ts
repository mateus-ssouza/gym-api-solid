import { Gym, Prisma } from "@prisma/client";
import { GymsRepository } from "./../gyms-repository";
import { randomUUID } from "node:crypto";

export class InMemoryGymsRepository implements GymsRepository {
  public items: Gym[] = [];

  async findById(gymId: string): Promise<Gym | null> {
    const gym = this.items.find((gym) => gym.id === gymId);

    if (!gym) {
      return null;
    }

    return gym;
  }

  async create(data: Prisma.GymCreateInput) {
    const gym = {
      id: data.id ?? randomUUID(),
      title: data.title,
      description: data.description ?? null,
      phone: data.phone ?? null,
      longitude: new Prisma.Decimal(data.longitude.toString()),
      latitude: new Prisma.Decimal(data.latitude.toString()),
      created_at: new Date(),
    };

    this.items.push(gym);

    return gym;
  }
}
