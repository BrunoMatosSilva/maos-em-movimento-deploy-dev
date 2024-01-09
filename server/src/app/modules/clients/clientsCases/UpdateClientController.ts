import { Request, Response } from "express";
import { UpdateClientUseCase  } from "./UpdateClientUseCase";

export class UpdateClientController {
  async handle(req: Request, res: Response){
    const { id } = req.params;

    const {
      name,
      dateOfBirth,
      fone,
      addressCep,
      addressRoad,
      addressNumber,
      addressComplement,
      addressDistrict,
      addressCity,
    } = req.body

    const updateClientUseCase = new UpdateClientUseCase();

    const result = await updateClientUseCase.execute({
      id,
      name,
      dateOfBirth,
      fone,
      addressCep,
      addressRoad,
      addressNumber,
      addressComplement,
      addressDistrict,
      addressCity,
    });

    return res.status(201).json(result);
  }
}
