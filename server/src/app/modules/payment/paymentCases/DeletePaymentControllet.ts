import { Request, Response } from "express";
import { DeletePlaymentUseCase } from "./DeletePaymentUseCase";

export class DeletePaymentController {
  async handle(req: Request, res: Response){
    const paymentId = req.params.id;

    try{
    const deletePaymentUseCase = new DeletePlaymentUseCase();

    await deletePaymentUseCase.execute(paymentId);

    return res.status(200).json("Form Payment deleted successfully!");
    }catch(error){
      console.error('Erro ao deletar serviço do dia.', error);
      return res.status(500).json({ error: 'Erro ao deletar serviço do dia.' });
    }
  }
}
