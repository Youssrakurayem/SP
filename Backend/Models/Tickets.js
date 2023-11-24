const mongoose = require("mongoose");

const schemaOptions = {
  strict: true,
  timestamps: true,
};

const TicketsSchema = new mongoose.Schema(
  {
    TicketId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },

    UserID: {
      type: int,
      required: true,
    },

    Subject: {
      type: String,
      required: true,
    },

    Description: {
      type: String,
      required: true,
    },

    Status:{

      type: String,
      required: true,
    },

    Resolution:{

      type: String,
      required: true,
    },
    Priority: {
      type: String,
      required: true,
    },

    AssignedAgentID: {
      type: String,
      required: true,
    },
  },
  schemaOptions
);

module.exports = mongoose.model("Tickets", TicketsSchema);
