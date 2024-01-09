import { prisma } from "../../../db/prisma";
import { Therapie } from "@prisma/client";
import { TherapieDTO } from "../dtos/TherapieDTO";

export class CreateTherapieUseCase {
  async execute({
    name,
    therapist
    }: TherapieDTO): Promise<Therapie> {

      const therapie = await prisma.therapie.create({
        data: {
          name,
          therapist
        }
      });

      return therapie;
    }
}
