const mongoose = require('mongoose')

const schema = new mongoose.Schema(
    {
        restaurantId: { type: String, required: true },
        name: { type: String, required: true },
        brand: { type: String, required: true },
        description: { type: String, required: true },
        value: { type: Number, required: true }
    }
)

const Product = mongoose.model('Product', schema)

exports.create = (body) => {
    const product = new Product(body)
    return product.save()
}