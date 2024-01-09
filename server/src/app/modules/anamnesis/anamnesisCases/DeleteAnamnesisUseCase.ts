import { Client } from "@prisma/client";
import { prisma } from "../../../db/prisma";

export class DeleteAnamnsesisUseCase {
  async execute(id:string): Promise<Client[]> {

    const formAnamnesis = await prisma.anamnese.deleteMany({
      where: {
        id,
      }
    });

    return formAnamnesis;
  }
}
