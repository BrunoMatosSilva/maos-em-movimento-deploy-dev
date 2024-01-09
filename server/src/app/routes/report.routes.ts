import { Router } from "express";
import { GetReportController } from "../modules/report/reportCase/getReportController";

const getReportController = new GetReportController();

const reportRoutes = Router();

reportRoutes.get('/', getReportController.handle);

export { reportRoutes };
