import { Router } from "express";
import { CreateAnamnesisController } from "../modules/anamnesis/anamnesisCases/CreateAnamnesisController";
import { DeleteAnamnesisController } from "../modules/anamnesis/anamnesisCases/DeleteAnamnesisController";
import { GetAnamnesisController } from "../modules/anamnesis/anamnesisCases/GetAnamnesisController";
import { UpdateAnamnesisController } from "../modules/anamnesis/anamnesisCases/UpdateAnamnesisController";
import { GetAllAnamnesisController } from "../modules/anamnesis/anamnesisCases/GetAllAnamnesisController";

const createAnamnesisController = new CreateAnamnesisController();
const getAllAnamnesisController = new GetAllAnamnesisController();
const getAnamnesisController = new GetAnamnesisController();
const updateAnamnesisController = new UpdateAnamnesisController();
const deleteAnamnesisController = new DeleteAnamnesisController();

const anamnesisRoutes = Router();

anamnesisRoutes.post("/:id" , createAnamnesisController.handle);
anamnesisRoutes.get("/client/:id" , getAllAnamnesisController.handle);
anamnesisRoutes.get("/:id" , getAnamnesisController.handle);
anamnesisRoutes.patch("/:id" , updateAnamnesisController.handle);
anamnesisRoutes.delete("/:id" , deleteAnamnesisController.handle);

export {anamnesisRoutes}
