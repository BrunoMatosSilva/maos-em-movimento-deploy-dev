/*
  Warnings:

  - You are about to drop the column `name` on the `therapie_services` table. All the data in the column will be lost.
  - Added the required column `therapieId` to the `therapie_services` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "therapie_services" DROP CONSTRAINT "therapie_services_serviceId_fkey";

-- AlterTable
ALTER TABLE "therapie_services" DROP COLUMN "name",
ADD COLUMN     "therapieId" TEXT NOT NULL,
ALTER COLUMN "isConfirm" SET DEFAULT false;

-- AddForeignKey
ALTER TABLE "therapie_services" ADD CONSTRAINT "therapie_services_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "services"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "therapie_services" ADD CONSTRAINT "therapie_services_therapieId_fkey" FOREIGN KEY ("therapieId") REFERENCES "therapies"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
