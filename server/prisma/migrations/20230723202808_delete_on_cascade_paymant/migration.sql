-- DropForeignKey
ALTER TABLE "services" DROP CONSTRAINT "services_paymantId_fkey";

-- AddForeignKey
ALTER TABLE "services" ADD CONSTRAINT "services_paymantId_fkey" FOREIGN KEY ("paymantId") REFERENCES "paymant"("id") ON DELETE CASCADE ON UPDATE CASCADE;
