const mongoose = require('mongoose')
const Product = require('./product-model')

const schema = new mongoose.Schema(
    {
        quantity: { type: String, required: true },
        receiverName: { type: String, required: true },
        receiverAddress: { type: String, required: true },
        product: { type: Product, required: true }
    }
)

module.exports = mongoose.model('Order', schema)
