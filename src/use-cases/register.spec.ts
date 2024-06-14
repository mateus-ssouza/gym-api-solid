import { expect, describe, it } from "vitest";
import { RegisterUseCase } from "./register";
import { compare } from "bcryptjs";
import { InMemoryUsersRepository } from "../repositories/in-memory/in-memory-repository";
import { UserAlreadyExistsError } from "./errors/user-already-exists-error";

describe("Register Use Case", () => {
  it("should be able to register", async () => {
    const usersRepository = new InMemoryUsersRepository();
    const registerUserCase = new RegisterUseCase(usersRepository);

    const password = "123456";

    const { user } = await registerUserCase.execute({
      name: "John Doe",
      email: "johndoe@example.com",
      password,
    });

    expect(user.id).toEqual(expect.any(String));
  });

  it("should hash user password upon registration", async () => {
    const usersRepository = new InMemoryUsersRepository();
    const registerUserCase = new RegisterUseCase(usersRepository);

    const password = "123456";

    const { user } = await registerUserCase.execute({
      name: "John Doe",
      email: "johndoe@example.com",
      password,
    });

    const isPasswordCorrectlyHashed = await compare(
      password,
      user.password_hash
    );

    expect(isPasswordCorrectlyHashed).toBe(true);
  });

  it("should not be able to register with same email twice", async () => {
    const usersRepository = new InMemoryUsersRepository();
    const registerUserCase = new RegisterUseCase(usersRepository);

    const email = "johndoe@example.com";

    await registerUserCase.execute({
      name: "John Doe",
      email,
      password: "123456",
    });

    expect(() =>
      registerUserCase.execute({
        name: "John Doe",
        email,
        password: "123456",
      })
    ).rejects.toBeInstanceOf(UserAlreadyExistsError);
  });
});
