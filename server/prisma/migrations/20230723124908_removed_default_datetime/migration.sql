-- AlterTable
ALTER TABLE "paymant" ALTER COLUMN "paymant" DROP NOT NULL,
ALTER COLUMN "paymantConfirme" DROP NOT NULL,
ALTER COLUMN "observation" DROP NOT NULL;

-- AlterTable
ALTER TABLE "services" ALTER COLUMN "createdAt" DROP DEFAULT;
