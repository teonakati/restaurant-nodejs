require('dotenv').config()

const express = require('express')
const mongooseConfig = require('./src/data/mongoose-config')
const app = express()

const addRegisterController = require('./src/controllers/register-controller')

app.use(express.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 }))

app.use(express.json())
app.use(function (_, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next()
})

mongooseConfig();

app.get('/', (_, res) => {
    res.send('API Online...')
  });

addRegisterController(app)

app.listen(3001, () => {
    console.log(`Servidor rodando... http://localhost:3001/`)
  });