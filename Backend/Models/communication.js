const mongoose = require("mongoose");

const schemaOptions = {
  strict: true,
  timestamps: true,
};

const CommunicationSchema = new mongoose.Schema(
  {
    MessageId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },

    SenderId: {
      type: int,
      required: true,
    },

    RecipientID: {
      type: int,
      required: true,
    },

    Subject: {
      type: String,
      required: true,
    },
    Timestamp: {
        type: datetime,
        required: true,
      },


  },
  schemaOptions
);

module.exports = mongoose.model("communication", CommunicationSchema);