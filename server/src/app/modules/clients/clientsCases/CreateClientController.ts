import { Request, Response } from "express";
import { CreateClientUseCase  } from "./CreateClientUseCase";

export class CreateClientController {
  async handle(req: Request, res: Response){
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

    const createClientUseCase = new CreateClientUseCase();

    const result = await createClientUseCase.execute({
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
