export type ProductType = {
    id?:number,
    title: string,
    description: string,
    price: number,
    categoryId: number
};

export type PhotoType = {
    id?:number,
    productId: number,
    url: string
};