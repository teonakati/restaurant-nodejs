const express = require('express')
const router = express.Router()
const Product = require('../models/product-model')
const authMiddleware = require('../authentication/auth')

router.post('/product', authMiddleware, (req, res) => {
    const { name, brand, description, value } = req.body

    if (!name || !brand || !description || !value) return res.status(400).send({ message: "Todos os campos são obrigatórios." })

    let product = {
        restaurantId: req.user._id,
        name,
        brand,
        description,
        value
    }


    Product.create(product)
    .then((_) => {
        res.status(201).send()
    })
    .catch((error) => {
        res.status(400).send({ message: "Ocorreu um erro ao salvar registro.", error: error.toString() })
    })
    
})

module.exports = (app) => { app.use('/', router) }