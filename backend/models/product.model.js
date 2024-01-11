const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  // id: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   required: true,
  //   unique: true,
  // },
  name: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 50,
  },
  picture: {
    type: String,
    required: true,
    validate: {
      validator: function (value) {
        // A simple URL validation, you might want to use a library for more thorough validation
        return /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/.test(value);
      },
      message: 'Invalid URL format for picture',
    },
  },
  description: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    enum: ['male', 'female'],
    required: true,
  },
  category: {
    type: String,
    enum: ['makeup', 'skincare', 'haircare'],
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: {
    type: Date,
    default: Date.now,
  },
});

const ProductModel = mongoose.model('product', productSchema);

module.exports = {ProductModel};
