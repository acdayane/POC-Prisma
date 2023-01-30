import { createProduct, createImage, findProducts, deleteProductRepository } from "./repositories.js";

export async function insertProduct (title: string, description: string, price: number, categoryId: number) {
    await createProduct(title, description, price, categoryId)
}

export async function insertImage (productId: number, url: string) {
    await createImage(productId, url);
}

export async function getProductsList () {
    const productsList = await findProducts();
    return productsList;
}

export async function deleteProductService(id: number) {
    await deleteProductRepository(id);
}