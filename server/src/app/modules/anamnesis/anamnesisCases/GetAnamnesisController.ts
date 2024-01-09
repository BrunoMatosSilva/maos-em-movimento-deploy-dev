import { Request, Response } from "express";
import { GetAnamnesisUseCase } from "./GetAnamnesisUseCase";

export class GetAnamnesisController {
  async handle(req: Request, res: Response){
    const patientId = req.params.id

    const getAnamnesisUseCase = new GetAnamnesisUseCase();

    const result = await getAnamnesisUseCase.execute(patientId)

    return res.status(201).json(result);
  }
}
