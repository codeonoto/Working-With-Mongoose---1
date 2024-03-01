import mongoose from 'mongoose';

export const userSchema = new mongoose.Schema({
  name: {
    type: String,
    maxLength: [25, "Name can't be greater than 25 character"],
  },
  email: {
    type: String,
    unique: true,
    required: true,
    match: [/.+\@.+\../, 'Please Enter a valid Email'],
  },
  password: {
    type: String,
    // validate: {
    //   validator: function (value) {
    //     return /^(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,12}$/.test(value);
    //   },
    //   message:
    //     'Password should be  between 8-12 character and have a special character',
    // },
  },
  type: { type: String, enum: ['Customer', 'Seller'] },
});
