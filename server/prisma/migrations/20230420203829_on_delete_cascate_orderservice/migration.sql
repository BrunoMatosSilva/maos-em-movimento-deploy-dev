-- DropForeignKey
ALTER TABLE "Order_service" DROP CONSTRAINT "Order_service_patientId_fkey";

-- AddForeignKey
ALTER TABLE "Order_service" ADD CONSTRAINT "Order_service_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "clients"("id") ON DELETE CASCADE ON UPDATE CASCADE;
