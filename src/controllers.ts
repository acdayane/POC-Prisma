import { Request, Response } from "express";
import { number } from "joi";
import { ProductType, PhotoType } from "./protocols.js";
import { getProductsList, insertImage, insertProduct, deleteProductService } from "./services.js";


export async function newProduct(req: Request, res: Response) {
    const {title, description, price, categoryId} = res.locals.product as ProductType;

    try {
        await insertProduct(title, description, price, categoryId);
        res.sendStatus(201);
    } catch(err) {
        res.status(500).send(err);
    };
};

export async function newPhoto(req: Request, res: Response) {
    const { productId, url } = res.locals.photo as PhotoType;

    try {
        await insertImage(productId, url);
        res.sendStatus(201); 
    } catch(err) {
        res.status(500).send(err);
    };  
};

export async function getProducts(req: Request, res: Response) {

    try {
        const productsList = await getProductsList();
        res.status(200).send(productsList);
    } catch(err) {
        res.status(500).send(err);
    };
};

export async function deleteProduct(req: Request, res: Response) {
    const {id} = req.params;

    try {
        await deleteProductService({id});
        res.sendStatus(200);
    } catch(err) {
        res.status(500).send(err);
    };
}