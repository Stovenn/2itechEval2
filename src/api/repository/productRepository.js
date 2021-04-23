const mongoose = require('mongoose')
const Product = require('../models/Product')

const ProductRepository = {
    async getAllProducts(){
        return Product.find();
    },
    async getOneProduct(productId){
        return Product.findById(productId);
    },
    async create(body){
        const document = new Product(body);
        return document.save();
    },
    async updateProduct(productId){
        return mongoose.model('Product').findOneAndUpdate(productId)
    },
    async deleteProduct(productId){
        return mongoose.model('Product').findOneAndDelete(productId)
    },
}

module.exports = ProductRepository;