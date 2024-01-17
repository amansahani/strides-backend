/*
  Warnings:

  - Added the required column `personatDetailsId` to the `Document` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Document" DROP CONSTRAINT "Document_id_fkey";

-- AlterTable
ALTER TABLE "Document" ADD COLUMN     "personatDetailsId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Document" ADD CONSTRAINT "Document_personatDetailsId_fkey" FOREIGN KEY ("personatDetailsId") REFERENCES "PersonalDetails"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
