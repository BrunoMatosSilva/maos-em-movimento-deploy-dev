import { Router } from "express";
import { CreateServiceController } from "../modules/services/servicesCases/CreateServiceController";
import { CreateTherapieServiceController } from "../modules/services/servicesCases/CreateTherapieServiceController";
import { GetFilterServiceController } from "../modules/services/servicesCases/GetFilterServiceController";
import { GetAllServiceController } from "../modules/services/servicesCases/GetAllServicesController";
import { UpdateTherapieServiceController } from "../modules/services/servicesCases/UpdateServiceController";
import { DeleteServiceController } from "../modules/services/servicesCases/DeleteServiceController";
import { GetClientServiceController } from "../modules/services/servicesCases/GetClientServiceController";
import { DeleteTherapieServiceController } from "../modules/services/servicesCases/DeleteTherapieServiceController";

const getAllServicesController = new GetAllServiceController();
const getClientServiceController = new GetClientServiceController();
const getFilterServiceController = new GetFilterServiceController();
const createServiceController = new CreateServiceController();
const createTherapieServiceController = new CreateTherapieServiceController();
const updateTherapieServicesController = new UpdateTherapieServiceController();
const deleteServiceController = new DeleteServiceController();
const deleteTherapieServiceController = new DeleteTherapieServiceController();

const serviceRoutes = Router();

serviceRoutes.get('/', getAllServicesController.handle);
serviceRoutes.get('/therapie', getFilterServiceController.handle);
serviceRoutes.get('/:id', getClientServiceController.handle);
serviceRoutes.post("/:id", createServiceController.handle);
serviceRoutes.post("/therapie/:id", createTherapieServiceController.handle);
serviceRoutes.patch("/therapie/:id", updateTherapieServicesController.handle);
serviceRoutes.delete("/:id", deleteServiceController.handle);
serviceRoutes.delete("/therapie/:id", deleteTherapieServiceController.handle);

export { serviceRoutes };
