import { Request, Response } from "express";
import { CreateAnamnesisUseCase } from "./CreateAnamnesisUseCase";

export class CreateAnamnesisController {
  async handle(req: Request, res: Response){
    const patientId = req.params.id

    const {
      smoker,
      pregnant,
      headecha,
      insomnia,
      diabete,
      hypertension,
      stress,
      circulatory,
      allergy,
      anaemia,
      legPain,
      backPain,
      physical,
      physicalName,
      anotherDisease,
      surgery,
      surgeryName,
      medicament,
      medicamentName,
      reclamation ,
      phrase,
      project,
    } = req.body;

    const createAnamnesisUseCase = new CreateAnamnesisUseCase();

    const result = await createAnamnesisUseCase.execute({
      patientId,
      smoker,
      pregnant,
      headecha,
      insomnia,
      diabete,
      hypertension,
      stress,
      circulatory,
      allergy,
      anaemia,
      legPain,
      backPain,
      physical,
      physicalName,
      anotherDisease,
      surgery,
      surgeryName,
      medicament,
      medicamentName,
      reclamation ,
      phrase,
      project,
    })

    return res.status(201).json(result);
  }
}
