import { Router } from "express";
import { newProduct, newPhoto, getProducts } from "./controllers.js";
import { validationPhoto, validationProduct } from "./middlewares.js";

const router = Router();

router.post("/product", validationProduct, newProduct);
router.post("/photo", validationPhoto, newPhoto);
router.get("/", getProducts);

export default router;