import { Request, Response } from "express";
import { GetAllAnamnesisUseCase } from "./GetAllAnamnesisUseCase";

export class GetAllAnamnesisController {
  async handle(req: Request, res: Response){
    const patientId = req.params.id

    const getAllAnamnesisUseCase = new GetAllAnamnesisUseCase();

    const result = await getAllAnamnesisUseCase.execute(patientId)

    return res.status(201).json(result);
  }
}
