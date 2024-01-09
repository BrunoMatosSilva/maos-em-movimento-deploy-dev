import { prisma } from "../../../db/prisma";
import { Therapie } from "@prisma/client";

export class GetAllTherapieUseCase {
  async execute(): Promise<Therapie[]> {

      const therapie = await prisma.therapie.findMany({
        orderBy: {
          name: "asc"
        }
      });

      return therapie;
    }
}
