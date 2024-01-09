import { Request, Response } from 'express';
import { CreateTherapieServiceUseCase } from './CreateTherapieServiceUseCase';

export class CreateTherapieServiceController {
  async handle(req: Request, res: Response) {
    const serviceId = req.params.id;
    const { name, isConfirm } = req.body;

    const createTherapieServiceUseCase = new CreateTherapieServiceUseCase();

    try {
      const result = await createTherapieServiceUseCase.execute(
        serviceId,
        name,
        isConfirm
      );

      return res.status(201).json(result);
    } catch (error) {
      console.error('Erro ao criar a terapia do serviço:', error);
      return res.status(500).json({ error: 'Erro ao criar a terapia do serviço.' });
    }
  }
}
