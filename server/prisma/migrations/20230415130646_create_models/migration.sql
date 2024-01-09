-- CreateTable
CREATE TABLE "clients" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "dateOfBirth" TIMESTAMP(3) NOT NULL,
    "fone" TEXT NOT NULL,
    "addressCep" TEXT NOT NULL,
    "addressRoad" TEXT NOT NULL,
    "addressNumber" TEXT NOT NULL,
    "addressComplement" TEXT NOT NULL,
    "addressDistrict" TEXT NOT NULL,
    "addressCity" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "clients_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "therapies" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "therapist" TEXT NOT NULL,

    CONSTRAINT "therapies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Order_service" (
    "id" TEXT NOT NULL,
    "patientId" TEXT NOT NULL,
    "paymant" TEXT NOT NULL,
    "paymantConfirme" TEXT NOT NULL,
    "observation" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Order_service_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "anamnesis" (
    "id" TEXT NOT NULL,
    "patientId" TEXT NOT NULL,
    "smoker" TEXT NOT NULL,
    "pregnant" TEXT NOT NULL,
    "headecha" TEXT NOT NULL,
    "insomnia" TEXT NOT NULL,
    "diabete" TEXT NOT NULL,
    "hypertension" TEXT NOT NULL,
    "stress" TEXT NOT NULL,
    "circulatory" TEXT NOT NULL,
    "allergy" TEXT NOT NULL,
    "anaemia" TEXT NOT NULL,
    "legPain" TEXT NOT NULL,
    "backPain" TEXT NOT NULL,
    "physical" TEXT NOT NULL,
    "physicalName" TEXT NOT NULL,
    "anotherDisease" TEXT NOT NULL,
    "surgery" TEXT NOT NULL,
    "surgeryName" TEXT NOT NULL,
    "medicament" TEXT NOT NULL,
    "medicamentName" TEXT NOT NULL,
    "reclamation" TEXT NOT NULL,
    "phrase" TEXT NOT NULL,
    "project" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "anamnesis_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_OrderServiceToTherapie" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "clients_name_key" ON "clients"("name");

-- CreateIndex
CREATE UNIQUE INDEX "anamnesis_patientId_key" ON "anamnesis"("patientId");

-- CreateIndex
CREATE UNIQUE INDEX "_OrderServiceToTherapie_AB_unique" ON "_OrderServiceToTherapie"("A", "B");

-- CreateIndex
CREATE INDEX "_OrderServiceToTherapie_B_index" ON "_OrderServiceToTherapie"("B");

-- AddForeignKey
ALTER TABLE "Order_service" ADD CONSTRAINT "Order_service_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "clients"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "anamnesis" ADD CONSTRAINT "anamnesis_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "clients"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OrderServiceToTherapie" ADD CONSTRAINT "_OrderServiceToTherapie_A_fkey" FOREIGN KEY ("A") REFERENCES "Order_service"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OrderServiceToTherapie" ADD CONSTRAINT "_OrderServiceToTherapie_B_fkey" FOREIGN KEY ("B") REFERENCES "therapies"("id") ON DELETE CASCADE ON UPDATE CASCADE;
