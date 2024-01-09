import { Router } from "express";
import { anamnesisRoutes } from "./anamnsesis.routes";
import { clientRoutes } from "./client.routes";
import { therapiesRoutes } from "./therapies.routes";
import { serviceRoutes } from "./service.routes";
import { paymentRoutes } from "./payment.routes";
import { reportRoutes } from "./report.routes";

const routes = Router();

routes.use("/client", clientRoutes);
routes.use("/anamnesis", anamnesisRoutes);
routes.use("/therapies", therapiesRoutes);
routes.use("/service", serviceRoutes);
routes.use("/payment", paymentRoutes);
routes.use("/report", reportRoutes)

export { routes };
