const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;


const productSchema = new Schema({
    id: ObjectId,
    title: String,
    price: Number,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, {
    timestamps: true
})


const Product =  mongoose.model('Product', productSchema);

module.exports = Product;