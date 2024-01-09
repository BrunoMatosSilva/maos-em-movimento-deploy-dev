import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

interface FilterTherapieDTO {
  name: string;
  createdAt: Date;
}

export class GetFilterServiceUseCase {
  async execute(data: FilterTherapieDTO) {
    try {
      const { name, createdAt } = data;

      const filteredTherapies = await prisma.therapieServices.findMany({
        where: {
          name: {
            equals: name,
          },
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

      return filteredTherapies;
    } catch (error) {
      console.error('Erro ao buscar terapias', error);
      throw new Error('Erro ao buscar terapias.');
    }
  }
}
