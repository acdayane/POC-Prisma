import { Router } from "express";
import { newProduct, newPhoto, getProducts, deleteProduct } from "./controllers.js";
import { validationPhoto, validationProduct } from "./middlewares.js";

const router = Router();

router.post("/product", validationProduct, newProduct);
router.post("/photo", validationPhoto, newPhoto);
router.get("/", getProducts);
router.delete("/product/:id", deleteProduct);

export default router;