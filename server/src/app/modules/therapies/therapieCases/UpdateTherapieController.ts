import { Request, Response } from "express";
import { UpdateTherapieUseCase } from "./UpdateTherapieUseCase";

export class UpdateTherapieController {
  async handle(req: Request, res: Response){
    const { id } = req.params;

    const {
      name,
      therapist,
    } = req.body

    const updateTherapieUseCase = new UpdateTherapieUseCase();

    const result = await updateTherapieUseCase.execute({
      id,
      name,
      therapist,
    });

    return res.status(201).json(result);
  }
}
