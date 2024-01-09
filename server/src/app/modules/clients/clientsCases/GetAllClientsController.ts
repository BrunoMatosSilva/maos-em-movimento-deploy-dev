import { Request, Response } from "express";
import { GetAllClientsUseCase } from "./GetAllClientsUseCase";

export class GetAllClientsController {
  async handle(req: Request, res: Response){

    const getAllClientUseCase = new GetAllClientsUseCase();

    const result = await getAllClientUseCase.execute();

    return res.status(201).json(result);
  }
}
