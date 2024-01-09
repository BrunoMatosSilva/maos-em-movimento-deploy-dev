import { Request, Response } from "express";
import { CreateTherapieUseCase } from "./CreateTherapieUseCase";

export class CreateTherapieController {
  async handle(req: Request, res: Response){
    const {
      name,
      therapist,
    } = req.body

    const createTherapieUseCase = new CreateTherapieUseCase();

    const result = await createTherapieUseCase.execute({
      name,
      therapist,
    });

    return res.status(201).json(result);
  }
}
