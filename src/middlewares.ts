import { productSchema, photoSchema } from "./models.js";
import { Response, Request, NextFunction } from "express";

export function validationProduct (req: Request, res: Response, next: NextFunction) {
    const product = req.body;

    const validation = productSchema.validate(product, { abortEarly: false });
if (validation.error) {
    const err = validation.error.details.map((d) => d.message);
    return res.status(422).send(err);
};

    res.locals.product = product;
    next();
};

export function validationPhoto (req: Request, res: Response, next: NextFunction) {
    const photo = req.body;

    const validation = photoSchema.validate(photo, { abortEarly: false });
if (validation.error) {
    const err = validation.error.details.map((d) => d.message);
    return res.status(422).send(err);
};

    res.locals.photo = photo;
    next();
};
