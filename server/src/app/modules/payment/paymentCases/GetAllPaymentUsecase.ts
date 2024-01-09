import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class GetAllPaymentUseCase {
  async execute(patientId: string) {
    try {
      const getPayment = await prisma.payment.findMany({
        orderBy: {
          createdAt: "desc",
        },
        where: {
          patientId: patientId,
        },
        include: {
          Service: {
            include: {
              patient: true,
            TherapieServices: {
              where: {
                isConfirm: true
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
