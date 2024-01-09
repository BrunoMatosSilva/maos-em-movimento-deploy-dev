import { Router } from "express";
import { CreateTherapieController } from "../modules/therapies/therapieCases/CreateTherapieController";
import { GetAllTherapieController } from "../modules/therapies/therapieCases/GetAllTherapieController";
import { GetTherapieController } from "../modules/therapies/therapieCases/GetTherapieController";
import { UpdateTherapieController } from "../modules/therapies/therapieCases/UpdateTherapieController";
import { DeleteTherapieController } from "../modules/therapies/therapieCases/DeleteTherapieController";


const createTherapieController = new CreateTherapieController();
const getAllTherapieControllers = new GetAllTherapieController();
const getTherapieControllers = new GetTherapieController();
const updateTherapieController = new UpdateTherapieController();
const deleteTherapieController = new DeleteTherapieController();

const therapiesRoutes = Router();

therapiesRoutes.post("/", createTherapieController.handle);
therapiesRoutes.get("/", getAllTherapieControllers.handle);
therapiesRoutes.get("/:id", getTherapieControllers.handle);
therapiesRoutes.patch("/:id", updateTherapieController.handle);
therapiesRoutes.delete("/:id", deleteTherapieController.handle);

export { therapiesRoutes };
