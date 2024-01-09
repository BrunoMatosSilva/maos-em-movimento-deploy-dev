import { prisma } from "../../../db/prisma";
import { Therapie } from "@prisma/client";
import { TherapieDTO } from "../dtos/TherapieDTO";

export class UpdateTherapieUseCase {
  async execute({
    id,
    name,
    therapist
    }: TherapieDTO): Promise<Therapie> {

      const therapie = await prisma.therapie.update({
        where:{
          id,
        },
        data: {
          name,
          therapist
        }
      });

      return therapie;
    }
}
