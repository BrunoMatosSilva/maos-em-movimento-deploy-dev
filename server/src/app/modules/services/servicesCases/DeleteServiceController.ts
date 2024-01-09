import { Request, Response } from "express";
import { DeleteServiceUseCase } from "./DeleteServiceUseCase";

export class DeleteServiceController {
  async handle(req: Request, res: Response){
    const {id} = req.params;

    try{
    const deleteServiceUseCase = new DeleteServiceUseCase();

    await deleteServiceUseCase.execute(id);

    return res.status(200).json("Form Service deleted successfully!");
    }catch(error){
      console.error('Erro ao deletar serviço do dia.', error);
      return res.status(500).json({ error: 'Erro ao deletar serviço do dia.' });
    }
  }
}
