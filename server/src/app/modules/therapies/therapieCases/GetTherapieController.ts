import { Request, Response } from "express";
import { GetTherapieUseCase } from "./GetTherapieUseCase";

export class GetTherapieController {
  async handle(req: Request, res: Response){
    const {id} = req.params;

    const getTherapieUseCase = new GetTherapieUseCase();

    const result = await getTherapieUseCase.execute(id);

    return res.status(201).json(result);
  }
}
