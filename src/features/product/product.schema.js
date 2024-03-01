import mongoose, { Schema } from 'mongoose';

export const productSchema = new mongoose.Schema({
  // name, desc, imageUrl, category, price
  name: String,
  desc: String,
  price: Number,
  category: String,
  inStock: Number,
});
