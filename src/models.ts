import joi from "joi";
import { PhotoType, ProductType } from "./protocols";

export const productSchema = joi.object<ProductType>({
    title: joi.string().min(4).max(50).required(),
	description: joi.string().max(300).required(),
	price: joi.number().integer().positive().required(),
	categoryId: joi.number().integer().positive().required()
});

export const photoSchema = joi.object<PhotoType>({
    productId: joi.number().integer().positive().required(),
    url: joi.string().uri().required()
});