import { prisma } from "../../../db/prisma";
import { AnamnesisDTO } from "../dtos/AnamnesisDTO";
import { Anamnese } from "@prisma/client";
import { getToday } from "../../../utils/dateTime";

export class UpdateAnamnesisUseCase {
  async execute({
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
  }:AnamnesisDTO): Promise<Anamnese> {

    const today = getToday();

    const formAnamnesis = await prisma.anamnese.update({
      where: {
        patientId,
      },
      data: {
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
        updatedAt: today,
      }
    });

    return formAnamnesis;
  }
};
