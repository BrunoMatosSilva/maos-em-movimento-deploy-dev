import { Request, Response } from 'express';
import { getToday } from '../../../utils/dateTime';
import { GetAllServiceUseCase } from './GetAllServicesUseCase';

export class GetAllServiceController {
  async handle(req: Request, res: Response) {
    const createdAt = getToday();

    const allTherapieUseCase = new GetAllServiceUseCase();

    try {
      const allTherapies = await allTherapieUseCase.execute({
        createdAt,
      });

      return res.status(200).json(allTherapies);
    } catch (error) {
      console.error('Erro ao buscar terapias desse dia.', error);
      return res.status(500).json({ error: 'Erro ao buscar terapias desse dia.' });
    }
  }
}
