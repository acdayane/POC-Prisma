/*
  Warnings:

  - You are about to drop the `products` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[url]` on the table `images` will be added. If there are existing duplicate values, this will fail.

*/
-- DropTable
DROP TABLE "products";

-- CreateTable
CREATE TABLE "Products" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "imageId" INTEGER NOT NULL,
    "categoryId" INTEGER NOT NULL,

    CONSTRAINT "Products_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "images_url_key" ON "images"("url");

-- AddForeignKey
ALTER TABLE "Products" ADD CONSTRAINT "Products_imageId_fkey" FOREIGN KEY ("imageId") REFERENCES "images"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Products" ADD CONSTRAINT "Products_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
