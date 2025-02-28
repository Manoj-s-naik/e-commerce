const product = require("../modules/productModel");

const addProductHandler = async (req, res) => {
  try {
    const productDetails = req.body;
    if (!productDetails) {
      return res.status(404).json({
        message: "product details required",
        status: "failure",
      });
    }
    const newAddedProduct = await product.create(productDetails);
    return res.status(201).json({
      message: "new product added successfully",
      status: "success",
      product: newAddedProduct,
    });
  } catch (err) {
    return res.status(500).json({
      message: "Internal server error we will soon sort it",
      success: "failure",
      error: err.message,
    });
  }
};

const viewProductHandler = async (req, res) => {
  try {
    const products = await product.find();
    return res.status(201).json({
      message: "product fetched successfully",
      success: "success",
      products,
    });
  } catch (err) {
    return res.status(500).json({
      message: "Internal server error we will soon sort it",
      success: "failure",
      error: err.message,
    });
  }
};
module.exports = { addProductHandler, viewProductHandler };
