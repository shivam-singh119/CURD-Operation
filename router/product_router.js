const express=require("express");
const router = express.Router();
const {getProducts, getProduct, createProduct, updateProduct, deleteProduct} = require('../controller/product_controller');


router.get('/', getProducts);

router.get("/:id", getProduct);

router.post("/create", createProduct);

// update a product
router.put("/:id", updateProduct);

// delete a product
router.delete("/:id", deleteProduct);




module.exports = router;