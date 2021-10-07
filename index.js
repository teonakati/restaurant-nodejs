const express = require('express')
const app = express()

app.use(express.json({ limit: '50mb' }))
app.use(express.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 }))

app.use(express.json())
app.use(function (_, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next()
})

const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://admin:admin123@restaurant.gkocs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")

app.get('/', (_, res) => {
    res.send('API Online...')
  });

app.listen(3001, () => {
    console.log(`Servidor rodando... http://localhost:3001/`)
  });