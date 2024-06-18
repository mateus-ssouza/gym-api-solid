import { expect, describe, it, beforeEach } from "vitest";
import { InMemoryCheckInsRepository } from "../repositories/in-memory/in-memory-check-ins-repository";
import { CheckInUseCase } from "./checkin";

let checkInsRepository: InMemoryCheckInsRepository;
let checkInUseCase: CheckInUseCase;

describe("Get User Profile Use Case", () => {
  beforeEach(() => {
    checkInsRepository = new InMemoryCheckInsRepository();
    checkInUseCase = new CheckInUseCase(checkInsRepository);
  });

  it("should be able to check in", async () => {
    const checkIn = await checkInsRepository.create({
      gym_id: "gym-01",
      user_id: "user-01",
    });

    expect(checkIn.id).toEqual(expect.any(String));
  });
});
