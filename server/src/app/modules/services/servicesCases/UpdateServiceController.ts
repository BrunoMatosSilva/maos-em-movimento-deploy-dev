import { Request, Response } from 'express';
import { UpdateTherapieServiceUseCase } from './UpdateServiceUseCase';


export class UpdateTherapieServiceController {
  async handle(req: Request, res: Response) {
    const therapieId = req.params.id;
    const { isConfirm } = req.body;

    const updateTherapieServiceUseCase = new UpdateTherapieServiceUseCase();

    try {
      const result = await updateTherapieServiceUseCase.execute(
        therapieId,
        isConfirm
      );

      return res.status(201).json(result);
    } catch (error) {
      console.error('Erro ao criar a terapia do serviço:', error);
      return res.status(500).json({ error: 'Erro ao criar a terapia do serviço.' });
    }
  }
}
