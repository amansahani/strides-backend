/*
  Warnings:

  - You are about to drop the column `email` on the `AcademicDetails` table. All the data in the column will be lost.
  - You are about to drop the `Address` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `area` to the `PersonalDetails` table without a default value. This is not possible if the table is not empty.
  - Added the required column `city` to the `PersonalDetails` table without a default value. This is not possible if the table is not empty.
  - Added the required column `flatPlotNo` to the `PersonalDetails` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pincode` to the `PersonalDetails` table without a default value. This is not possible if the table is not empty.
  - Added the required column `state` to the `PersonalDetails` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "AcademicDetails" DROP CONSTRAINT "AcademicDetails_email_fkey";

-- DropForeignKey
ALTER TABLE "Address" DROP CONSTRAINT "Address_personalDetailsId_fkey";

-- DropIndex
DROP INDEX "AcademicDetails_email_key";

-- AlterTable
ALTER TABLE "AcademicDetails" DROP COLUMN "email",
ALTER COLUMN "id" DROP DEFAULT;
DROP SEQUENCE "AcademicDetails_id_seq";

-- AlterTable
ALTER TABLE "PersonalDetails" ADD COLUMN     "area" TEXT NOT NULL,
ADD COLUMN     "city" TEXT NOT NULL,
ADD COLUMN     "flatPlotNo" TEXT NOT NULL,
ADD COLUMN     "pincode" TEXT NOT NULL,
ADD COLUMN     "state" TEXT NOT NULL;

-- DropTable
DROP TABLE "Address";

-- CreateTable
CREATE TABLE "Document" (
    "id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "contentType" TEXT NOT NULL,
    "dataURL" TEXT NOT NULL,

    CONSTRAINT "Document_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "AcademicDetails" ADD CONSTRAINT "AcademicDetails_id_fkey" FOREIGN KEY ("id") REFERENCES "PersonalDetails"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Document" ADD CONSTRAINT "Document_id_fkey" FOREIGN KEY ("id") REFERENCES "PersonalDetails"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
