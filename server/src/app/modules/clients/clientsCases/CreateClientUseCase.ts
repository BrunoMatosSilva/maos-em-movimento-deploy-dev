import { ClientDTO } from "../dtos/ClientDTO";
import { prisma } from "../../../db/prisma";
import { Client } from "@prisma/client";
import { AppError } from "../../../../errors/appError";
import { getToday } from "../../../utils/dateTime";

export class CreateClientUseCase {
  async execute({
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

      const clientAlreadyExists = await prisma.client.findUnique({
        where: {
          name,
        }
      });

      if(clientAlreadyExists) {
        throw new AppError("Client already exists!");
      }

      const user = await prisma.client.create({
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
          createdAt: today,
          updatedAt: today,
        }
      });

      return user;
    }
}
