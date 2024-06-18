import { expect, describe, it, beforeEach } from "vitest";
import { RegisterUseCase } from "./register";
import { compare, hash } from "bcryptjs";
import { InMemoryUsersRepository } from "../repositories/in-memory/in-memory-users-repository";
import { UserAlreadyExistsError } from "./errors/user-already-exists-error";
import { AuthenticateUseCase } from "./authenticate";
import { InvalidCredentialsError } from "./errors/invalid-credentials-error";

let usersRepository: InMemoryUsersRepository;
let authenticateUseCase: AuthenticateUseCase;

describe("Authenticate Use Case", () => {
  beforeEach(() => {
    usersRepository = new InMemoryUsersRepository();
    authenticateUseCase = new AuthenticateUseCase(usersRepository);
  });

  it("should be able to autheticate", async () => {
    const password = "123456";

    await usersRepository.create({
      name: "John Doe",
      email: "johndoe@example.com",
      password_hash: await hash(password, 6),
    });

    const { user } = await authenticateUseCase.execute({
      email: "johndoe@example.com",
      password,
    });

    expect(user.id).toEqual(expect.any(String));
  });

  it("should not be able to autheticate with wrong email", async () => {
    await expect(() =>
      authenticateUseCase.execute({
        email: "johndoe@example.com",
        password: "123456",
      })
    ).rejects.toBeInstanceOf(InvalidCredentialsError);
  });

  it("should not be able to autheticate with wrong password", async () => {
    await usersRepository.create({
      name: "John Doe",
      email: "johndoe@example.com",
      password_hash: await hash("123456", 6),
    });

    await expect(() =>
      authenticateUseCase.execute({
        email: "johndoe@example.com",
        password: "121212",
      })
    ).rejects.toBeInstanceOf(InvalidCredentialsError);
  });
});
