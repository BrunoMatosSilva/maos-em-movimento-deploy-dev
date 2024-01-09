import { Request, Response } from "express";
import { GetPaymentUseCase } from "./GetPaymentUseCase";

export class GetPaymentController {
  async handle(req: Request, res: Response){
    const paymentId = req.params.id;

    const getAllAnamnesisUseCase = new GetPaymentUseCase();

    const result = await getAllAnamnesisUseCase.execute(paymentId)

    return res.status(201).json(result);
}
}
