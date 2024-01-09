import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class GetReportUseCase {
  async execute(date: Date) {

    try {
      const getPayment = await prisma.payment.findMany({
        where: {
          createdAt: {
            equals: date,
          },
          Service: {
            some: {
              AND: [
                {
                  TherapieServices: {
                    some: {
                      isConfirm: true,
                    },
                  },
                },
                {
                  NOT: {
                    TherapieServices: {
                      none: {
                        isConfirm: true,
                      },
                    },
                  },
                },
              ],
            },
          },
        },
        include: {
          Service: {
            include: {
              patient: true,
              TherapieServices: {
                where: {
                  isConfirm: true,
                },
              },
            },
          },
        },
      });

      return getPayment;
    } catch (error) {
      console.error('Erro ao buscar o Payment:', error);
      throw new Error('Erro ao buscar o Payment.');
    }
  }
}
