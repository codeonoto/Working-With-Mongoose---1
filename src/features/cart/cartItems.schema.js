import mongoose, { Schema } from 'mongoose';

export const cartSchema = new Schema({
  productID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'products',
  },
  userID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
  },
  quantity: Number,
});
