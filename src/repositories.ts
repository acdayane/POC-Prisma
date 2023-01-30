import { Products, images } from "@prisma/client";
import prisma from "./database.js";

export async function createProduct(title: string, description: string, price: number, categoryId: number, imageId: number): Promise<void> {
    await prisma.products.create({
        data: {
            title,
            description,
            price,
            categoryId,
            imageId
        }
    });
};

export async function createImage(url: string): Promise<void> {  
    await prisma.images.create({
        data: {
            url
        }
    });
};

export async function findProducts(): Promise<Products[]> {
    const products = await prisma.products.findMany({
        include: {category: true, image: true}     
    })

    return products
};

export async function deleteProductRepository(id: number): Promise<void> {
    await prisma.products.delete({
        where: {id}
    });
};