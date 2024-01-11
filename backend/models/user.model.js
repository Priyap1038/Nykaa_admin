const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 50,
  },
  avatar: {
    type: String,
    required: true,
    validate: {
      validator: function (value) {
        // A simple URL validation, you might want to use a library for more thorough validation
        return /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/.test(value);
      },
      message: "Invalid URL format for avatar",
    },
  },
  email: {
    type: String,
    required: true,
    unique: true,
    // Basic email format validation
    match: /^\S+@\S+\.\S+$/,
  },
  password: {
    type: String,
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

const UserModel = mongoose.model("user", userSchema);

module.exports = { UserModel };

// id: {
//   type: mongoose.Schema.Types.ObjectId,
//   required: true,
//   unique: true,
// },
