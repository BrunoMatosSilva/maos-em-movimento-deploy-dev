import { prisma } from "../../../db/prisma";
import { Therapie } from "@prisma/client";

export class GetTherapieUseCase {
  async execute(id:string): Promise<Therapie[]> {

      const therapie = await prisma.therapie.findMany({
        where: {
         id,
        }
      });

      return therapie;
    }
}
