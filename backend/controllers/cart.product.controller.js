const express = require("express");
const router = express.Router();
const Cart = require("../models/cart.product.model");

router.put("/items", async (req, res) => {
  try {
    await Cart.updateOne(
      { userId: req.body.userId },
      { $pull: { cartItems: { productId: req.body.cartItems.productId } } }
    );

    const cartItem = await Cart.updateOne(
      { userId: req.body.userId },
      { $addToSet: { cartItems: req.body.cartItems } },
      {
        upsert: true,
      }
    );
    res.status(200).send(cartItem);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

router.delete("/items/delete/:id", async (req, res) => {
  try {
    const cartItem = await Cart.findByIdAndDelete({ _id: req.params.id });
    res.status(201).send(cartItem);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

module.exports = router;
