import { prisma } from "../../../db/prisma";
import { Therapie } from "@prisma/client";

export class DeleteTherapieUseCase {
  async execute(id:string): Promise<Therapie[]> {

      const therapie = await prisma.therapie.delete({
        where: {
         id,
        }
      });

      return therapie;
    }
}
