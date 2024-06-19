import { Gym } from "@prisma/client";
import { GymsRepository } from "../repositories/gyms-repository";

interface CreateGymUseCaseRequest {
  title: string;
  description: string | null;
  phone: string | null;
  longitude: number;
  latitude: number;
}

interface CreateGymUseCaseResponse {
  gym: Gym;
}

export class CreateGymUseCase {
  constructor(private gymsRepository: GymsRepository) {}

  async execute({
    title,
    description,
    phone,
    longitude,
    latitude,
  }: CreateGymUseCaseRequest) {
    const gym = await this.gymsRepository.create({
      title,
      description,
      phone,
      longitude,
      latitude,
    });

    return {
      gym,
    };
  }
}
