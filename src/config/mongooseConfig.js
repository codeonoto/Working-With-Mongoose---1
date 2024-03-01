import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

export const connectUsingMongoose = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log('MongoDB connected using mongoose');
  } catch (err) {
    console.log('Error while connecting to db \n', err);
  }
};
