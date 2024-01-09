import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class CreateTherapieServiceUseCase {
  async execute(
    serviceId: string,
    name: string,
    isConfirm: boolean
    ) {
    try {

      const createdTherapieServices = await prisma.therapieServices.create({
        data: {
          serviceId,
          name,
        },
      });

      return { therapieServices: createdTherapieServices };
    } catch (error) {
      console.error('Erro ao criar a terapia do serviço:', error);
      throw new Error('Erro ao criar a terapia do serviço.');
    }
  }
}
