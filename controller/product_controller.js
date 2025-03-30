const Product = require("../model/product");

const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    // res.status(200).json(products);

    res.status(200).json({
      status: true,
      message: "all product retained successfully",
      data: products
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    // res.status(200).json(product);

    res.status(200).json({
      status: true,
      message: "product retained successfully",
      data: product
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createProduct = async (req, res) => {
  try {
    
    const product = await Product.create(req.body);
    res.status(200).json({
      status: true,
      message: "product created successfully",
      data: product
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await Product.findByIdAndUpdate(id, req.body);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    const updatedProduct = await Product.findById(id);
    res.status(200).json({
      status: true,
      message: "product updatedProduct successfully",
      data: updateProduct
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await Product.findByIdAndDelete(id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    // res.status(200).json({ message: "Product deleted successfully" });

    res.status(200).json({
      status: true,
      message: "product deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};