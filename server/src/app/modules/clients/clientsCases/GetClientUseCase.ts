import { Client } from "@prisma/client";
import { AppError } from "../../../../errors/appError";
import { prisma } from "../../../db/prisma";

export class GetClientUseCase {
  async execute(id: string): Promise<Client[]> {

    const clientAlreadyExists = await prisma.client.findUnique({
      where: {
        id,
      }
    });

    if(!clientAlreadyExists) {
      throw new AppError("Client not found!");
    }

    const client = await prisma.client.findMany({
      where: {
        id:id,
      },
      include: {
        Anamnese: true
      },
    });

    if(!client) {
      throw new AppError("Client not found!");
    }

    return client;
  }
}
