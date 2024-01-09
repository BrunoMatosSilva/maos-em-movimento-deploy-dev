/*
  Warnings:

  - You are about to drop the column `paymantId` on the `services` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "services" DROP CONSTRAINT "services_paymantId_fkey";

-- AlterTable
ALTER TABLE "services" DROP COLUMN "paymantId",
ADD COLUMN     "paymentId" TEXT;

-- AddForeignKey
ALTER TABLE "services" ADD CONSTRAINT "services_paymentId_fkey" FOREIGN KEY ("paymentId") REFERENCES "payment"("id") ON DELETE CASCADE ON UPDATE CASCADE;
