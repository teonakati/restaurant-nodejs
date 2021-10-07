const mongoose = require('mongoose')

const schema = new mongoose.Schema(
    {
        cnpj: { type: String, required: true },
        razaoSocial: { type: String, required: true },
        nomeFantasia: { type: String },
        phone: { type: String, required: true },
        email: { type: String, required: true },
        password: { type: String, required: true },
        token: { type: String }
    }
)

const Restaurant = mongoose.model('Restaurant', schema)

exports.findByEmail = (email) => {
    return Restaurant.findOne({email})
        .then(result => {
            return result
        })
}

exports.createRestaurant = (body) => {
    const restaurant = new Restaurant(body)
    return restaurant.save()
}