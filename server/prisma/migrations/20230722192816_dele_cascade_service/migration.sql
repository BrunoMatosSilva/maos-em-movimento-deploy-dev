-- DropForeignKey
ALTER TABLE "therapie_services" DROP CONSTRAINT "therapie_services_serviceId_fkey";

-- AddForeignKey
ALTER TABLE "therapie_services" ADD CONSTRAINT "therapie_services_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "services"("id") ON DELETE CASCADE ON UPDATE CASCADE;
