const mongoose = require("mongoose");

const cartProductSchema = new mongoose.Schema(
  {
    cartItems: [
      {
        productId: { type: mongoose.Schema.Types.ObjectId, ref: "product", },
        size: { type: String, required: true },
        price: { type: Number, required: true },
        quantity: { type: Number, required: true, default: 1 },
      },
    ],
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("cartProduct", cartProductSchema);
