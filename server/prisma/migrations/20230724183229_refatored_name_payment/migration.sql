/*
  Warnings:

  - You are about to drop the `paymant` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "paymant" DROP CONSTRAINT "paymant_patientId_fkey";

-- DropForeignKey
ALTER TABLE "services" DROP CONSTRAINT "services_paymantId_fkey";

-- DropTable
DROP TABLE "paymant";

-- CreateTable
CREATE TABLE "payment" (
    "id" TEXT NOT NULL,
    "patientId" TEXT NOT NULL,
    "payment" TEXT,
    "paymentConfirme" TEXT,
    "observation" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "payment_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "services" ADD CONSTRAINT "services_paymantId_fkey" FOREIGN KEY ("paymantId") REFERENCES "payment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "payment" ADD CONSTRAINT "payment_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "clients"("id") ON DELETE CASCADE ON UPDATE CASCADE;
