const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    avatar: {
      type: String,
      required: true,
      // unique: true
    },
    name: {
      type: String,
      required: true,
      unique: true,
      maxlength: 200,
    },
    price: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
      maxlength: 400,
    },
    category: {
      type: String,
      required: true,
      unique: true,
      maxlength: 400,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("product", productSchema);
