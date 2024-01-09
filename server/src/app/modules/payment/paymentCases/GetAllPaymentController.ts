import { Request, Response } from "express";
import { GetAllPaymentUseCase } from "./GetAllPaymentUsecase";

export class GetAllPaymentController {
  async handle(req: Request, res: Response){
    const patientId = req.params.id;

    const getAllAnamnesisUseCase = new GetAllPaymentUseCase();

    const result = await getAllAnamnesisUseCase.execute(patientId)

    return res.status(201).json(result);
}
}
