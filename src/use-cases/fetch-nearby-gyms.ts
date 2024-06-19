import { Gym } from "@prisma/client";
import { GymsRepository } from "../repositories/gyms-repository";

interface FetchNearbyGymsUseCaseRequest {
  userLongitude: number;
  userLatitude: number;
}

interface FetchNearbyGymsUseCaseResponse {
  gym: Gym[];
}

export class FetchNearbyGymsUseCase {
  constructor(private gymsRepository: GymsRepository) {}

  async execute({
    userLongitude,
    userLatitude,
  }: FetchNearbyGymsUseCaseRequest) {
    const gyms = await this.gymsRepository.findManyNearby({
      latitude: userLatitude,
      longitude: userLongitude,
    });

    return {
      gyms,
    };
  }
}
