-- CreateTable
CREATE TABLE "PersonalDetails" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "middleName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "mobileNumber" TEXT NOT NULL,
    "fatherName" TEXT NOT NULL,
    "motherName" TEXT NOT NULL,
    "parentsIncome" TEXT NOT NULL,

    CONSTRAINT "PersonalDetails_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AcademicDetails" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "tenthSchool" TEXT NOT NULL,
    "examBoard10th" TEXT NOT NULL,
    "passingYear10th" TEXT NOT NULL,
    "percentage10th" TEXT NOT NULL,
    "rollNo10th" TEXT NOT NULL,
    "twelfthSchool" TEXT NOT NULL,
    "examBoard12th" TEXT NOT NULL,
    "passingYear12th" TEXT NOT NULL,
    "percentage12th" TEXT NOT NULL,
    "rollNo12th" TEXT NOT NULL,
    "stream12th" TEXT NOT NULL,

    CONSTRAINT "AcademicDetails_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Address" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "flatPlotNo" TEXT NOT NULL,
    "area" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "pincode" TEXT NOT NULL,
    "personalDetailsId" INTEGER,

    CONSTRAINT "Address_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "PersonalDetails_email_key" ON "PersonalDetails"("email");

-- CreateIndex
CREATE UNIQUE INDEX "AcademicDetails_email_key" ON "AcademicDetails"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Address_email_key" ON "Address"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Address_personalDetailsId_key" ON "Address"("personalDetailsId");

-- AddForeignKey
ALTER TABLE "AcademicDetails" ADD CONSTRAINT "AcademicDetails_email_fkey" FOREIGN KEY ("email") REFERENCES "PersonalDetails"("email") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Address" ADD CONSTRAINT "Address_personalDetailsId_fkey" FOREIGN KEY ("personalDetailsId") REFERENCES "PersonalDetails"("id") ON DELETE SET NULL ON UPDATE CASCADE;
