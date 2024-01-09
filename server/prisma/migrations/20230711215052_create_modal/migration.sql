/*
  Warnings:

  - You are about to drop the `Order_service` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_OrderServiceToTherapie` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Order_service" DROP CONSTRAINT "Order_service_patientId_fkey";

-- DropForeignKey
ALTER TABLE "_OrderServiceToTherapie" DROP CONSTRAINT "_OrderServiceToTherapie_A_fkey";

-- DropForeignKey
ALTER TABLE "_OrderServiceToTherapie" DROP CONSTRAINT "_OrderServiceToTherapie_B_fkey";

-- DropTable
DROP TABLE "Order_service";

-- DropTable
DROP TABLE "_OrderServiceToTherapie";

-- CreateTable
CREATE TABLE "services" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "patientId" TEXT NOT NULL,
    "paymantId" TEXT,

    CONSTRAINT "services_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "therapie_services" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "isConfirm" BOOLEAN NOT NULL,
    "serviceId" TEXT NOT NULL,

    CONSTRAINT "therapie_services_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "paymant" (
    "id" TEXT NOT NULL,
    "patientId" TEXT NOT NULL,
    "paymant" TEXT NOT NULL,
    "paymantConfirme" TEXT NOT NULL,
    "observation" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "paymant_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "services" ADD CONSTRAINT "services_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "clients"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "services" ADD CONSTRAINT "services_paymantId_fkey" FOREIGN KEY ("paymantId") REFERENCES "paymant"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "therapie_services" ADD CONSTRAINT "therapie_services_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "services"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "paymant" ADD CONSTRAINT "paymant_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "clients"("id") ON DELETE CASCADE ON UPDATE CASCADE;
