const mongoose = require('mongoose')

module.exports = () => {
   return mongoose.connect('mongodb+srv://vinodjantikar:vinodjantikar@cluster0.sx66oai.mongodb.net/e-commerce-website?retryWrites=true&w=majority')
}

