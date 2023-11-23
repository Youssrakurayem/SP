const mongoose = require("mongoose");

const schemaOptions = {
  strict: true,
  timestamps: true,
};

const workflowSchema = new mongoose.Schema(
  {
    workflowId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },

    workflowname: {
      type: String,
      required: true,
    },

    Description: {
      type: String,
      required: true,
    },

    IssueType:{

      type: String,
      required: true,
    },

    PriorityThreshold:{

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

module.exports = mongoose.model("workflow", workflowSchema);
