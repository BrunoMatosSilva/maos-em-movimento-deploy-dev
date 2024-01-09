import { Request, Response } from 'express';
import { CreateServiceUseCase } from './CreateServiceUseCase';

export class CreateServiceController {
  async handle(req: Request, res: Response) {
    const patientId = req.params.id;
    const { createdAt, paymentData } = req.body;

    const createServiceUseCase = new CreateServiceUseCase();

    try {
      const result = await createServiceUseCase.execute(
        {
          patientId,
          createdAt,
        },
        paymentData,
      );

      return res.status(201).json(result);
    } catch (error) {
      console.error('Erro ao criar serviço.', error);
      return res.status(500).json({ error: 'Erro ao criar serviço.' });
    }
  }
}
