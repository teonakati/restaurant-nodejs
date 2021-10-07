const express = require('express')
const router = express.Router()
const Restaurant = require('../models/restaurant-model')
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken");

router.post('/register', (req, res) => {
    const { email } = req.body

    Restaurant.findByEmail(email)
        .then((result) => {
            if (result) {
                res.status(400).send({ message: "E-mail já cadastrado." })
                return
            }

            req.body.password = bcrypt.hashSync(req.body.password, 10)

            Restaurant.createRestaurant(req.body)
                .then((_) => {
                    res.status(201).send()
                })
                .catch((error) => {
                    res.status(400).send({ message: "Ocorreu um erro ao salvar registro.", error: error.toString() })
                })
        })
        .catch((error) => {
            res.status(400).send({ message: "Ocorreu um erro ao tentar registrar usuario.", error: error.toString() })
        })
})


router.post('/login', (req, res) => {
    const { email, password } = req.body

    if (!email || !password) {
        res.status(400).send({ message: "E-mail e senha são campos obrigatórios." })
        return
    }

    Restaurant.findByEmail(email)
        .then((result) => {
            if (result && bcrypt.compareSync(password, result.password)) {
                const token = jwt.sign(
                    { email },
                    "SAPOKAY",
                    { expiresIn: "2h" }
                )
                
                const response = result.toJSON()
                
                response.token = token

                delete response.__v
                
                res.status(200).send(response)
            }
            else {
                if (result) {
                    res.status(400).send({ message: "E-mail ou senha inválidos." })
                }
                else {
                    res.status(400).send({ message: "E-mail não encontrado." })
                }
            }
        })
        .catch((error) => {
            res.status(400).send({ message: "Ocorreu um erro ao tentar efetuar login.", error: error.toString() })
        })
})

module.exports = (app) => { app.use('/', router) }