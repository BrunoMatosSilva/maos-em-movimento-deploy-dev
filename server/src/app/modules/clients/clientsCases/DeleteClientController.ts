import { Request, Response } from "express";
import { DeleteClientUseCase } from "./DeleteClientUseCase";

export class DeleteClientController {
  async handle(req: Request, res: Response){
    const {id} = req.params;

    const deleteClientUseCase = new DeleteClientUseCase();

    const deletedUser = await deleteClientUseCase.execute(id);

    return res.status(200).json("Client deleted successfully!");

  }
}
