import { createProduct, createImage, findProducts } from "./repositories.js";

export async function insertProduct (title: string, description: string, price: number, categoryId: number) {
    await createProduct(title, description, price, categoryId)
}

export async function insertImage (url: string) {
    await createImage(url);
}

export async function getProductsList () {
    const productsList = await findProducts();
    return productsList;
}
