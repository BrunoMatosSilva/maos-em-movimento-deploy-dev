import { Router } from "express";
import { GetPaymentController } from "../modules/payment/paymentCases/GetPaymentController";
import { UpdatePaymentController } from "../modules/payment/paymentCases/UpdatePaymentController";
import { DeletePaymentController } from "../modules/payment/paymentCases/DeletePaymentControllet";
import { GetAllPaymentController } from "../modules/payment/paymentCases/GetAllPaymentController";

const getAllPaymentController = new GetAllPaymentController();
const getPaymantController = new GetPaymentController();
const updatePaymentController = new UpdatePaymentController();
const deletePaymentController = new DeletePaymentController();

const paymentRoutes = Router();

paymentRoutes.get('/client/:id', getAllPaymentController.handle);
paymentRoutes.get('/:id', getPaymantController.handle);
paymentRoutes.patch('/:id', updatePaymentController.handle);
paymentRoutes.delete('/:id', deletePaymentController.handle);

export { paymentRoutes };
