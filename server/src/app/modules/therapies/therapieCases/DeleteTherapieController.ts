import { Request, Response } from "express";
import { GetTherapieUseCase } from "./GetTherapieUseCase";
import { DeleteTherapieUseCase } from "./DeleteTherapieUseCase";

export class DeleteTherapieController {
  async handle(req: Request, res: Response){
    const {id} = req.params;

    const deleteTherapieUseCase = new DeleteTherapieUseCase();

    const result = await deleteTherapieUseCase.execute(id);

    return res.status(201).send();
  }
}
