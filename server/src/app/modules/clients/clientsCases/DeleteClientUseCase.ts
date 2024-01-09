import { Client } from "@prisma/client";
import { AppError } from "../../../../errors/appError";
import { prisma } from "../../../db/prisma";

export class DeleteClientUseCase {
  async execute(id:string): Promise<Client[]> {

    const clientAlreadyExists = await prisma.client.findUnique({
      where: {
        id,
      }
    });

    if(!clientAlreadyExists) {
      throw new AppError("Client not found!");
    }

    const client = await prisma.client.deleteMany({
      where: {
        id,
      }
    });

    return client;
  }
}
