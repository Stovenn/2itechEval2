const ProductService = require("../service/productService");

exports.product_list = async (req, res) => {
  console.log("here", req.user)
  try{
    const products = await ProductService.getAllProducts();
    return res.status(200).json(products)
} catch(error) {
    console.error('[ProductController]', error)
    return res.status(400).json({'error': error})
}
};
exports.product_detail = (req, res) => {
  return ProductService.getOneProduct(req, res);
};

exports.product_create = (req, res) => {
  return ProductService.createProduct(req, res);
};

exports.product_update = (req, res) => {};

exports.product_delete = (req, res) => {};
