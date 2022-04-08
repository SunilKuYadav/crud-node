import express from "express";

// import product controller
import Product from "./../controllers/product";

// init express router
const router = express.Router();

// get all product
router.get("/product/list", Product.index);

// create a new product
router.post("/product/create", Product.create);

// update a product
router.patch("/product/update", Product.update);

// delete a product
router.delete("/product/delete", Product.delete);

export default router;
