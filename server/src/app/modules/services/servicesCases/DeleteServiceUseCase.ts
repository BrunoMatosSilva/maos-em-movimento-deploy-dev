import { Client } from "@prisma/client";
import { prisma } from "../../../db/prisma";

export class DeleteServiceUseCase {
  async execute(id:string): Promise<Client[]> {
    try {
      const deleteService = await prisma.service.deleteMany({
        where: {
          id,
        }
      });

      return deleteService;
    }catch (error) {
    console.error('Erro ao deletar serviço do dia', error);
    throw new Error('Erro ao deletar serviço do dia.');
  }
}
}
