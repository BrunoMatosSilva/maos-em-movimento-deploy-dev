import { Router } from "express";
import { CreateClientController } from "../modules/clients/clientsCases/CreateClientController";
import { DeleteClientController } from "../modules/clients/clientsCases/DeleteClientController";
import { GetClientController } from "../modules/clients/clientsCases/GetClientController";
import { GetAllClientsController } from "../modules/clients/clientsCases/GetAllClientsController";
import { UpdateClientController } from "../modules/clients/clientsCases/UpdateClientController";

const createClientController = new CreateClientController();
const getAllClientsController = new GetAllClientsController();
const getClientController = new GetClientController();
const updateClientController = new UpdateClientController();
const deleteClientController = new DeleteClientController();

const clientRoutes = Router();

clientRoutes.post("/", createClientController.handle);
clientRoutes.get("/", getAllClientsController.handle);
clientRoutes.get("/:id", getClientController.handle);
clientRoutes.patch("/:id", updateClientController.handle);
clientRoutes.delete("/:id", deleteClientController.handle);

export { clientRoutes };
