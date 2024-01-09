import { Request, Response } from "express";
import { GetAllTherapieUseCase } from "./GetAllTherapieUseCase";

export class GetAllTherapieController {
  async handle(req: Request, res: Response){

    const getAllTherapieUseCase = new GetAllTherapieUseCase();

    const result = await getAllTherapieUseCase.execute();

    return res.status(201).json(result);
  }
}
