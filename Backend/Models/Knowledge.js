const mongoose = require("mongoose");

const schemaOptions = {
  strict: true,
  timestamps: true,
};

const knowledgeSchema = new mongoose.Schema(
  {
    ArticleId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },

    title: {
      type: String,
      required: true,
    },

    content: {
      type: String,
      required: true,
    },

  },
  schemaOptions
);

module.exports = mongoose.model("Knowledge", knowlegdeSchema);
