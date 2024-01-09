import { Request, Response } from "express";
import { GetClientUseCase } from "./GetClientUseCase";

export class GetClientController {
  async handle(req: Request, res: Response){
    const {id}  = req.params;

    const getClientUseCase = new GetClientUseCase();

    const result = await getClientUseCase.execute(id);

    return res.status(201).json(result);
  }
}
