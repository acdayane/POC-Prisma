import { createProduct, createImage, findProducts, deleteProductRepository } from "./repositories.js";

export async function insertProduct (title: string, description: string, price: number, categoryId: number, imageId: number) {
    await createProduct(title, description, price, categoryId, imageId)
}

export async function insertImage (url: string) {
    await createImage(url);
}

export async function getProductsList () {
    const products = await findProducts();
    return products;
}

export async function deleteProductService(id: number) {
    await deleteProductRepository(id);
}