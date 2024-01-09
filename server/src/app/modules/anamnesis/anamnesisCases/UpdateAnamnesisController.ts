import { Request, Response } from "express";
import { UpdateAnamnesisUseCase } from "./UpdateAnamnesisUseCase";

export class UpdateAnamnesisController {
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

    const updateAnamnesisUseCase = new UpdateAnamnesisUseCase();

    const result = await updateAnamnesisUseCase.execute({
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
