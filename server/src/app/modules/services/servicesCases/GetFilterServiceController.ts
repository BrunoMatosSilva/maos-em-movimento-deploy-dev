import { Request, Response } from 'express';
import { GetFilterServiceUseCase } from './GetFilterServiceUseCase';
import { getToday } from '../../../utils/dateTime';

export class GetFilterServiceController {
  async handle(req: Request, res: Response) {
    const { name } = req.query;
    const createdAt = getToday();

    const filterTherapieUseCase = new GetFilterServiceUseCase();

    try {
      const filteredTherapies = await filterTherapieUseCase.execute({
        name: name as string,
        createdAt,
      });

      return res.status(200).json(filteredTherapies);
    } catch (error) {
      console.error('Erro ao buscar terapias.', error);
      return res.status(500).json({ error: 'Erro ao buscar terapias.' });
    }
  }
}
