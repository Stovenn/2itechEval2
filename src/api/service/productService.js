const ProductRepository = require("../repository/productRepository");
const UserService = require("../service/userService");
const mongoose = require('mongoose')
const Product = require('../models/Product')
const User = require('../models/User')

const ProductService = {
   getAllProducts() {
      return ProductRepository.getAllProducts();
  },
  async getOneProduct(req, res) {
    const productId = req.params.id;
    try {
      const product = await ProductRepository.getOneProduct(productId);
      return res.status(200).json(product);
    } catch (error) {
      console.error("[productService.js]", error);
      return res.status(404).json({ error: error.message });
    }
  },
  async createProduct (req, res) {
    const newProduct = new Product({
        title: req.body.title,
        price: req.body.price,
        user: req.body.user
    })
    try {
        await newProduct.save();
        let userById = await User.findById(req.body.user._id)
        userById.products.push(newProduct)
        await userById.save();
        return res.status(201).send("Product, successfully created")
    } catch (error) {
        console.error("[productService.js]", error);
        return res.status(404).json({ error: error.message });
    }
    
  },

  async updateProduct(req, res) {},
  async deleteProduct(req, res) {},
};

module.exports = ProductService;
