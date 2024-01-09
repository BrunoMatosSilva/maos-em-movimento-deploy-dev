import { Anamnese } from "@prisma/client";
import { AppError } from "../../../../errors/appError";
import { prisma } from "../../../db/prisma";

export class GetAllAnamnesisUseCase {
  async execute(patientId:string): Promise<Anamnese> {

    const anamnesisAlreadyExists = await prisma.anamnese.findMany({
      where: {
        patientId,
      }
    });

    if(!anamnesisAlreadyExists) {
      throw new AppError("Form not found!");
    }

    const formAnamnesis = await prisma.anamnese.findMany({
      where: {
        patientId,
      }
    });

    return formAnamnesis;
  }
};
