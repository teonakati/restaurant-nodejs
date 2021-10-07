const mongoose = require('mongoose')

const schema = new mongoose.Schema(
    {
        quantity: { type: String, required: true },
        receiverName: { type: String, required: true },
        receiverAddress: { type: String, required: true },
    }
)

module.exports = mongoose.model('Wish', schema)
