const {model, Schema, models } = require("mongoose");

const ProductSchema = new Schema({
    title: String,
    description: String,
    price: Number,
});

export const Product = models.Product || model('product', ProductSchema)