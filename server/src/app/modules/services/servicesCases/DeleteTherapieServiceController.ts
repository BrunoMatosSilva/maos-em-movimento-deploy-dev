import { Request, Response } from "express";
import { DeleteTherapieServiceUseCase } from "./DeleteTherapieServiceUseCase";

export class DeleteTherapieServiceController {
  async handle(req: Request, res: Response){
    const {id} = req.params;

    try{
    const deleteTherapieServiceUseCase = new DeleteTherapieServiceUseCase();

    await deleteTherapieServiceUseCase.execute(id);

    return res.status(200).json("Therapie deleted successfully!");
    }catch(error){
      console.error('Erro ao deletar a terapia.', error);
      return res.status(500).json({ error: 'Erro ao deletar a terapia.' });
    }
  }
}
