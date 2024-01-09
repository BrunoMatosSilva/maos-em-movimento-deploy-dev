import { Request, Response } from 'express';
import { getToday } from '../../../utils/dateTime';
import { GetClientServiceUseCase } from './GetClientServiceUseCase';

export class GetClientServiceController {
  async handle(req: Request, res: Response) {
    const patientId = req.params.id;
    const createdAt = getToday();

    const getClientServiceUseCase = new GetClientServiceUseCase();

    try {
      const getClientServiceTherapies = await getClientServiceUseCase.execute(
        patientId,
        createdAt
        );

      return res.status(200).json(getClientServiceTherapies);
    } catch (error) {
      console.error('Erro ao buscar a terapia do cliente', error);
      throw new Error('Erro ao buscar a terapia do cliente.');
    }
  }
}
