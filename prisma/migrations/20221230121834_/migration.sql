/*
  Warnings:

  - Added the required column `Description` to the `Transaction` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Transaction` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Transaction" ADD COLUMN     "Description" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL;
