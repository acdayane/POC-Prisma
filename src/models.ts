import joi from "joi";
import { PhotoType, ProductType } from "./protocols";

export const productSchema = joi.object<ProductType>({
    id: joi.number().integer().positive(),
    title: joi.string().min(4).max(50).required(),
	description: joi.string().max(300).required(),
	price: joi.number().integer().positive().required(),
	categoryId: joi.number().integer().positive().required(),
    imageId: joi.number().integer().positive().required()
});

export const photoSchema = joi.object<PhotoType>({
    url: joi.string().uri().required()
});