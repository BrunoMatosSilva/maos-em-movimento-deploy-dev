import { Client } from "@prisma/client";
import { prisma } from "../../../db/prisma";

export class DeleteTherapieServiceUseCase {
  async execute(id:string): Promise<Client[]> {
    try {
      const deleteTherapieService = await prisma.therapieServices.deleteMany({
        where: {
          id,
        }
      });

      return deleteTherapieService;
    }catch (error) {
    console.error('Erro ao deletar a terapia', error);
    throw new Error('Erro ao deletar a terapia.');
  }
}
}
