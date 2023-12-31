const mongoose = require("mongoose");

const schemaOptions = {
  strict: true,
  timestamps: true,
};

const userSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },

    username: {
      type: String,
      required: true,
    },

    firstName: {
      type: String,
      required: true,
    },

    lastName:{

      type: String,
      required: true,
    },

    role:{

      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },

    password: {
      type: String,
      required: true,
    },
  },
  schemaOptions
);

module.exports = mongoose.model("User", userSchema);
