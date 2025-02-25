const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    category: {
      type: String,
      required: true,
      enum: ["electronics", "clothing", "books", "home", "other"],
    },
    stock: {
      type: Number,
      required: true,
      min: 0,
      default: 0,
    },
    images: [
      {
        type: String, // URLs of product images
      },
    ],
    isFeatured: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true } // Adds createdAt and updatedAt fields
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
