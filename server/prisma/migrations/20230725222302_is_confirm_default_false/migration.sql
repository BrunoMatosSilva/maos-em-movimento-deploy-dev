-- AlterTable
ALTER TABLE "therapie_services" ALTER COLUMN "isConfirm" DROP NOT NULL,
ALTER COLUMN "isConfirm" SET DEFAULT false;
