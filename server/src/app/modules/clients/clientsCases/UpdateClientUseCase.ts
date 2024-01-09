import { ClientDTO } from "../dtos/ClientDTO";
import { prisma } from "../../../db/prisma";
import { Client } from "@prisma/client";
import { getToday } from "../../../utils/dateTime";

export class UpdateClientUseCase {
  async execute({
    id,
    name,
    fone,
    dateOfBirth,
    addressCep,
    addressRoad,
    addressNumber,
    addressComplement,
    addressDistrict,
    addressCity,
    }: ClientDTO): Promise<Client> {

      const today = getToday();

      const user = await prisma.client.update({
        where: {
          id,
        },
          data: {
            name,
            fone,
            dateOfBirth,
            addressCep,
            addressRoad,
            addressNumber,
            addressComplement,
            addressDistrict,
            addressCity,
            updatedAt: today,
        }
      });

      return user;
    }
}
