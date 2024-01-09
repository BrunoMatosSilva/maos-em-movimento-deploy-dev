import { prisma } from "../../../db/prisma";
import { AnamnesisDTO } from "../dtos/AnamnesisDTO";
import { AppError } from "../../../../errors/appError";
import { getToday } from "../../../utils/dateTime";

export class CreateAnamnesisUseCase {
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
  }:AnamnesisDTO) {

    const today = getToday();

    const anamnesisAlreadyExists = await prisma.anamnese.findUnique({
      where: {
        patientId,
      }
    });

    if(anamnesisAlreadyExists) {
      throw new AppError("Form already existis!");
    }

    const formAnamnesis = await prisma.anamnese.create({
      data: {
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
        createdAt: today,
        updatedAt: today,
      }
    });

    return formAnamnesis;
  }
};
