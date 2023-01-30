import prisma from "./database.js";
import { ProductType, PhotoType } from "./protocols.js";

export async function createProduct(title: string, description: string, price: number, categoryId: number): Promise<void> {
    await prisma.products.create({title, description, price, categoryId})
};

export async function createImage(url: string): Promise<void> {  
    await prisma.products.create({url})
};

export async function findProducts(): Promise<ProductType[]> {
    const products = await prisma.products.findMany({})
    return products
};