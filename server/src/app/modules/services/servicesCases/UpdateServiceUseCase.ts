import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class UpdateTherapieServiceUseCase {
  async execute(
    therapieId: string,
    isConfirm: boolean
    ) {
    try {

      const updateTherapieServices = await prisma.therapieServices.update({
        where: {
          id: therapieId,
        },
        data: {
          isConfirm,
        },
      });

      return { therapieServices: updateTherapieServices };
    } catch (error) {
      console.error('Erro ao atualizar a terapia do serviço:', error);
      throw new Error('Erro ao atualizar a terapia do serviço.');
    }
  }
}
