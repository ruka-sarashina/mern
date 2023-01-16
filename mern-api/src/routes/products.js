const express = require("express");

const router = express.Router();

const productsController = require("../controllers/products");

//! CREATE -> POST
router.post("/products", productsController.createProduct);

//! READ -> GET
router.get("/products", productsController.getAllProducts);

module.export = router;
