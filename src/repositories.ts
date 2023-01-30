import prisma from "./database.js";
import { ProductType } from "./protocols.js";

export async function createProduct(title: string, description: string, price: number, categoryId: number): Promise<void> {
    await prisma.products.create({
        data: {
            title,
            description,
            price,
            categoryId
        }
    });
};

export async function createImage(productId: number, url: string): Promise<void> {  
    await prisma.images.create({
        data: {
            productId,
            url
        }
    });
};

export async function findProducts(): Promise<ProductType[]> {
    const products = await prisma.products.findMany({})
    return products
};

export async function deleteProductRepository(id: number): Promise<void> {
    const deleteProduct = prisma.products.delete({
        where: {id}
    });

    const deleteImages = prisma.images.deleteMany({
        where: {productId: id}
    });
          
    const transaction = await prisma.$transaction([deleteProduct, deleteImages])
};