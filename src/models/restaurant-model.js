const mongoose = require('mongoose')

const schema = new mongoose.Schema(
    {
        cnpj: { type: String, required: true },
        razaoSocial: { type: String, required: true },
        nomeFantasia: { type: String, required: true },
        phone: { type: String, required: true },
        email: { type: String, required: true }
    }
)

module.exports = mongoose.model('Restaurant', schema)