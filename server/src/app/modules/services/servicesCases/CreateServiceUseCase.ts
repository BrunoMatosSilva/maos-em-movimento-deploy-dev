import { PrismaClient } from '@prisma/client';
import { getToday } from "../../../utils/dateTime";

const prisma = new PrismaClient();

interface CreateServiceDTO {
  patientId: string;
  createdAt: Date;
}

interface CreatePaymantDTO {
  patientId: string;
  payment?: string;
  paymentConfirme?: string;
  observation?: string;
  createdAt: Date,
  updatedAt: Date,
}

export class CreateServiceUseCase {
  async execute(serviceData: CreateServiceDTO, paymentData: CreateServiceDTO){
    const today = getToday();
    try {
      const createdService = await prisma.service.create({
        data: {
          patientId: serviceData.patientId,
          createdAt: today,
        },
      });

      const createdPayment = await prisma.payment.create({
        data: {
          patientId: serviceData.patientId,
          createdAt: today,
          updatedAt: today,
          Service: {
            connect: { id: createdService.id },
          },
        },
      });

      return { service: createdService, payment: createdPayment };
    } catch (error) {
      console.error('Erro ao criar serviço', error);
      throw new Error('Erro ao criar serviço.');
    }
  }
}
