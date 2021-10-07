const mongoose = require('mongoose')

const schema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        brand: { type: String, required: true },
        description: { type: String, required: true },
        value: { type: Number, required: true }
    }
)

module.exports = mongoose.model('Product', schema)