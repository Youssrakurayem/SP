const mongoose = require("mongoose");

const schemaOptions = {
  strict: true,
  timestamps: true,
};

const CustomizationSchema = new mongoose.Schema(
  {
    CustomizationID: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },

    OrganizationName: {
      type: String,
      required: true,
    },

    LogoURL: {
      type: String,
      required: true,
    },

    lPrimaryColor:{

      type: String,
      required: true,
    },

    FontFamily:{

      type: String,
      required: true,
    },
   
  },
  schemaOptions
);

module.exports = mongoose.model("Customization", CustomizationSchema);