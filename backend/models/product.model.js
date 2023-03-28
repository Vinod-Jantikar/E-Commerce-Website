const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    title: {type: String, required: true},
    category: {type: String, required: true},
    type:  {type: String, required: true},
    description:  {type: String, required: true},
    size: [{type: String, required: true}],
    url:  {type: String, required: true},
    price: {type: Number, required: true},
    discount: Number,
    stars: Number,
    ratings: Number,
    reviews: Number

}, {
    versionKey: false,
    timestamps: true
})

module.exports = mongoose.model('product', productSchema)