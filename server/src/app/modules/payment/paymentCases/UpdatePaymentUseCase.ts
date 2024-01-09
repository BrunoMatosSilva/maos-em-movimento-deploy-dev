import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class UpdatePaymentUseCase {
  async execute(
    paymentId: string,
    payment: string,
    paymentConfirme: string,
    observation: string,
  ) {
    try {
      const updatePayment = await prisma.payment.update({
        where: {
          id: paymentId,
        },
        data: {
          payment,
          paymentConfirme,
          observation,
        }
      });

      return {payment: updatePayment};
    } catch (error) {
      console.error('Erro ao alterar o Payment:', error);
      throw new Error('Erro ao alterar o Payment.');
    }
  }
}
