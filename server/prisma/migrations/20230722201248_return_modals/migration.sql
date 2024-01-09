/*
  Warnings:

  - You are about to drop the column `therapieId` on the `therapie_services` table. All the data in the column will be lost.
  - Added the required column `name` to the `therapie_services` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "therapie_services" DROP CONSTRAINT "therapie_services_serviceId_fkey";

-- DropForeignKey
ALTER TABLE "therapie_services" DROP CONSTRAINT "therapie_services_therapieId_fkey";

-- AlterTable
ALTER TABLE "therapie_services" DROP COLUMN "therapieId",
ADD COLUMN     "name" TEXT NOT NULL,
ALTER COLUMN "isConfirm" DROP DEFAULT;

-- AddForeignKey
ALTER TABLE "therapie_services" ADD CONSTRAINT "therapie_services_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "services"("id") ON DELETE CASCADE ON UPDATE CASCADE;
