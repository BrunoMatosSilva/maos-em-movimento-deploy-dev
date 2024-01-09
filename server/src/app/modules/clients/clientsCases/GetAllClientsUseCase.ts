import { Client } from "@prisma/client";
import { prisma } from "../../../db/prisma";

export class GetAllClientsUseCase {
  async execute(): Promise<Client[]> {
    const client = await prisma.client.findMany({
      orderBy: {
        name: "asc",
      }
    })

    return client;
  }
}
