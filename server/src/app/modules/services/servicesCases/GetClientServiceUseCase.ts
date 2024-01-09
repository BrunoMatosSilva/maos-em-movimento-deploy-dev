import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class GetClientServiceUseCase {
  async execute(
    patientId: string,
    createdAt: Date
  ) {
    try{
      const getClientService = await prisma.service.findMany({
        where: {
          patientId: patientId,
          createdAt: createdAt
        },
        include: {
          patient: true,
          TherapieServices: true
        }
      })

      return getClientService;
    }catch(error){
      console.error('Erro ao buscar a terapia do cliente', error);
      throw new Error('Erro ao buscar a terapia do cliente.');
    }
  }
}
