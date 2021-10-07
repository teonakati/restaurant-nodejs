const mongoose = require('mongoose')

module.exports = () => {
    mongoose.connect("mongodb+srv://admin:admin123@restaurant.gkocs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
}