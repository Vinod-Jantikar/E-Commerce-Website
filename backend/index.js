const express = require('express')
const cors = require('cors')
const userController = require("./controllers/user.controller")
const productController = require("./controllers/product.controller")
const cartProductController = require("./controllers/cart.product.controller")

const app = express()

app.use(express.json())
app.use(cors())

app.use('', userController)
app.use('/product', productController)
app.use('/cart-products', cartProductController)


module.exports = app