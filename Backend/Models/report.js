const mongoose = require("mongoose");

const schemaOptions = {
  strict: true,
  timestamps: true,
};

const ReportSchema = new mongoose.Schema(
  {
    ReportID: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },

    ReportType: {
      type: String,
      required: true,
    },

    TicketStatus: {
      type: String,
      required: true,
    },
    AgentID: {
        type: int,
        required: true,
      },
  },
  schemaOptions
);

module.exports = mongoose.model("report", ReportSchema);