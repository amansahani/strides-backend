/*
  Warnings:

  - You are about to drop the column `personatDetailsId` on the `Document` table. All the data in the column will be lost.
  - Added the required column `personalDetailsId` to the `Document` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Document" DROP CONSTRAINT "Document_personatDetailsId_fkey";

-- AlterTable
ALTER TABLE "Document" DROP COLUMN "personatDetailsId",
ADD COLUMN     "personalDetailsId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Document" ADD CONSTRAINT "Document_personalDetailsId_fkey" FOREIGN KEY ("personalDetailsId") REFERENCES "PersonalDetails"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
