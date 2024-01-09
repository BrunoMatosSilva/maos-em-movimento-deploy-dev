import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class DeletePlaymentUseCase {
  async execute(paymentId: string,) {
    try{
      const deletePayment = await prisma.payment.deleteMany({
        where: {
          id: paymentId,
        }
      })

      return deletePayment;
    }catch(error){
      console.error('Erro ao deletar pagamento', error);
      throw new Error('Erro ao deletar pagamento.');
    }
  }
}
