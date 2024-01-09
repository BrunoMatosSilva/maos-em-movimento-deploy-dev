import { Request, Response } from "express";
import { UpdatePaymentUseCase } from "./UpdatePaymentUseCase";

export class UpdatePaymentController {
  async handle(req: Request, res: Response){
    const paymentId = req.params.id;
    const {
      payment,
      paymentConfirme,
      observation,
    } = req.body;

    const updatePaymentUseCase = new UpdatePaymentUseCase();

    const result = await updatePaymentUseCase.execute(
      paymentId,
      payment,
      paymentConfirme,
      observation,
      )

    return res.status(201).json(result);
}
}
