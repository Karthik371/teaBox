/** @format */

const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  orderDate: {
    type: Date,
    default: new Date(),
  },
  orderTotal: String,
  orderId: String,
  userId: mongoose.Schema.Types.ObjectId,
});

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
