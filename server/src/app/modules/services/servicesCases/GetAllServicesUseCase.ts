import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

interface FilterTherapieDTO {
  createdAt: Date;
}

export class GetAllServiceUseCase {
  async execute(data: FilterTherapieDTO) {
    try {
      const { createdAt } = data;

      const allTherapies = await prisma.therapieServices.findMany({
        where: {
          Service: {
            createdAt: {
              gte: createdAt,
            },
          },
        },
        include: {
          Service: {
            include: {
              patient: true,
            },
          },
        },
      });

      return allTherapies;
    } catch (error) {
      console.error('Erro ao buscar terapias nesse dia', error);
      throw new Error('Erro ao buscar terapias nesse dia.');
    }
  }
}
