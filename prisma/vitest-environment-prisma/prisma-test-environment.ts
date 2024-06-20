import { Environment } from "vitest";

export default <Environment>{
  name: "prisma",
  transformMode: "web",
  async setup() {
    console.log("TESTE EXECUTOU");

    return {
      async teardown() {
        console.log("TESTE FINALIZOU");
      },
    };
  },
};
