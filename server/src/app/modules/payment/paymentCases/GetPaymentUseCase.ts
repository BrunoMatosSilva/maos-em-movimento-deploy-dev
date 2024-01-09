import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class GetPaymentUseCase {
  async execute(paymentId: string) {
    try {
      const getPayment = await prisma.payment.findUnique({
        where: {
          id: paymentId
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
