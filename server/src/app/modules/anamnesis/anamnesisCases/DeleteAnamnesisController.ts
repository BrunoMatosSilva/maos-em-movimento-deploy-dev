import { Request, Response } from "express";
import { DeleteAnamnsesisUseCase } from "./DeleteAnamnesisUseCase";

export class DeleteAnamnesisController {
  async handle(req: Request, res: Response){
    const {id} = req.params;

    const deleteAnamnesisUseCase = new DeleteAnamnsesisUseCase();

    await deleteAnamnesisUseCase.execute(id);

    return res.status(200).json("Form Anamnesis deleted successfully!");

  }
}
