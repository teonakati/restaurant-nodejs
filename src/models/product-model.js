const mongoose = require('mongoose');

const schema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        value: { type: Number, required: true },
        quantity: { type: Number, required: true },
    }
)

module.exports = mongoose.model('Product', schema);